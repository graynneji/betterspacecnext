"use client";

import { useEffect, useRef, useState } from "react";
import { supabase } from "@/app/_lib/supabase";
import styles from "./CallUI.module.css";
import {
  createPeerConnection,
  getUserMediaStream,
  addTracks,
  createOffer,
  handleOffer,
  handleAnswer,
  addIceCandidate,
  closeConnection,
} from "@/app/_lib/webrtc";
import { useDispatch, useSelector } from "react-redux";
import { call } from "@/app/store/callSlice";

export default function CallUI({ inCall, caller, type, channel }) {
  const [muted, setMuted] = useState(false);
  const [videoEnabled, setVideoEnabled] = useState(true);
  const [connectionState, setConnectionState] = useState("disconnected"); // Added connection state tracking
  const [errorMessage, setErrorMessage] = useState(null); // Added error handling

  const dispatch = useDispatch();
  const localRef = useRef(null);
  const remoteRef = useRef(null);
  const [localStream, setLocalStream] = useState(null);

  const users = useSelector((state) => state.getStoredUsers.users);
  const userId = users[0]?.user_id;

  // For cleaner code, create a function to check if we're in a valid call state
  const isValidCallState = () =>
    inCall && channel && userId && (caller === userId || caller !== userId);

  // Function to toggle audio mute
  const toggleMute = () => {
    if (!localStream) return;

    const audioTrack = localStream.getAudioTracks()[0];
    if (audioTrack) {
      audioTrack.enabled = !audioTrack.enabled;
      setMuted(!audioTrack.enabled);
    }
  };

  // Function to toggle video
  const toggleVideo = () => {
    if (!localStream) return;

    const videoTrack = localStream.getVideoTracks()[0];
    if (videoTrack) {
      videoTrack.enabled = !videoTrack.enabled;
      setVideoEnabled(videoTrack.enabled);
    }
  };

  // Function to end the call
  const endCall = () => {
    dispatch(
      call({ inCall: false, channel: null, type: "video", caller: null })
    );
  };

  // Main WebRTC setup effect
  useEffect(() => {
    // Don't do anything if we're not in a call or missing essential data
    if (!isValidCallState()) {
      return;
    }

    // State for tracking cleanup
    let isComponentMounted = true;
    let supabaseChannel = null;

    // Set connection state to connecting
    setConnectionState("connecting");
    setErrorMessage(null);

    const setup = async () => {
      try {
        // Step 1: Get media stream
        const stream = await getUserMediaStream(type);

        // Check if component is still mounted before updating state
        if (!isComponentMounted) return;

        if (!stream) {
          setErrorMessage("Could not access camera or microphone");
          setConnectionState("failed");
          return;
        }

        setLocalStream(stream);

        // Set local video stream
        if (localRef.current) {
          localRef.current.srcObject = stream;
        }

        // Step 2: Create peer connection with callbacks
        createPeerConnection(
          // Track handler - for receiving remote streams
          (event) => {
            if (!isComponentMounted) return;

            if (remoteRef.current) {
              remoteRef.current.srcObject = event.streams[0];
            }
            setConnectionState("connected");
          },
          // ICE candidate handler
          async (candidate) => {
            if (!isComponentMounted) return;

            try {
              const call = await supabase
                .from("call_requests")
                .select("*")
                .eq("channel", channel)
                .single();

              if (!call.data) {
                console.error("No call data found");
                return;
              }

              const existing = call.data.candidates || [];
              await supabase
                .from("call_requests")
                .update({ candidates: [...existing, candidate] })
                .eq("channel", channel);
            } catch (error) {
              console.error("Error sending ICE candidate:", error);
            }
          }
        );

        // Step 3: Add local tracks to connection
        addTracks(stream);

        // Step 4: Handle signaling based on who is caller/callee
        const isCaller = caller === userId;

        try {
          const callRow = await supabase
            .from("call_requests")
            .select("*")
            .eq("channel", channel)
            .maybeSingle();

          if (!callRow.data) {
            throw new Error("Call data not found");
          }

          if (isCaller) {
            // Create and send offer if we're the caller
            const offer = await createOffer();
            if (!offer) {
              throw new Error("Failed to create offer");
            }

            await supabase
              .from("call_requests")
              .update({ offer })
              .eq("channel", channel);
          } else {
            // Handle offer if we're the receiver
            const offer = callRow.data.offer;
            if (!offer) {
              throw new Error("No offer received");
            }

            const answer = await handleOffer(offer);
            if (!answer) {
              throw new Error("Failed to create answer");
            }

            await supabase
              .from("call_requests")
              .update({ answer })
              .eq("channel", channel);
          }
        } catch (error) {
          console.error("Signaling error:", error);
          if (isComponentMounted) {
            setErrorMessage(`Connection error: ${error.message}`);
            setConnectionState("failed");
          }
          return;
        }

        // Step 5: Listen for updates (answer and ICE candidates)
        supabaseChannel = supabase
          .channel(`rtc-${channel}`)
          .on(
            "postgres_changes",
            {
              event: "UPDATE",
              schema: "public",
              table: "call_requests",
              filter: `channel=eq.${channel}`,
            },
            async (payload) => {
              if (!isComponentMounted) return;

              const { answer, candidates } = payload.new;

              // Process answer if we're the caller
              if (answer && isCaller) {
                try {
                  await handleAnswer(answer);
                } catch (error) {
                  console.error("Error handling answer:", error);
                }
              }

              // Process ICE candidates
              if (candidates?.length) {
                try {
                  for (let c of candidates) {
                    await addIceCandidate(c);
                  }
                } catch (error) {
                  console.error("Error handling ICE candidates:", error);
                }
              }
            }
          )
          .subscribe((status) => {
            console.log("Supabase channel status:", status);
          });
      } catch (error) {
        console.error("Call setup error:", error);
        if (isComponentMounted) {
          setErrorMessage(`Setup error: ${error.message}`);
          setConnectionState("failed");
        }
      }
    };

    // Run the setup
    setup();

    // Cleanup function
    return () => {
      isComponentMounted = false;

      // Clean up Supabase channel
      if (supabaseChannel) {
        supabase.removeChannel(supabaseChannel);
      }

      // Clean up WebRTC and media
      closeConnection();

      // Clear local state
      setLocalStream(null);
      setConnectionState("disconnected");
    };
  }, [channel, inCall, type, caller, userId]); // Include all dependencies

  // Render based on current state
  if (!inCall) {
    return null;
  }

  return (
    <div className={styles.callWrapper}>
      {/* Show error message if there's an error */}
      {errorMessage && (
        <div className={styles.errorMessage}>
          {errorMessage}
          <button onClick={endCall} className={styles.endCallButton}>
            Close
          </button>
        </div>
      )}

      {/* Connection status indicator */}
      {connectionState === "connecting" && (
        <div className={styles.statusIndicator}>Connecting...</div>
      )}

      {/* Remote video */}
      <video ref={remoteRef} autoPlay playsInline className={styles.video} />

      {/* Local video */}
      <div className={styles.localVideo}>
        <video
          ref={localRef}
          autoPlay
          muted
          playsInline
          className={styles.video}
        />
      </div>

      {/* Controls */}
      <div className={styles.controls}>
        <div className={styles.controlBar}>
          <button className={styles.iconButton} onClick={toggleMute}>
            {muted ? "Unmute" : "Mute"}
          </button>
          <button className={styles.iconButton} onClick={toggleVideo}>
            {videoEnabled ? "Stop Video" : "Start Video"}
          </button>
          <button onClick={endCall} className={styles.endCallButton}>
            Drop call
          </button>
        </div>
      </div>
    </div>
  );
}
