"use client";
import styles from "./IncomingCallModal.module.css";
import { supabase } from "@/app/_lib/supabase";
import { call } from "@/app/store/callSlice";
import { Phone, PhoneDisconnect } from "@phosphor-icons/react/dist/ssr";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function IncomingCallModal() {
  const users = useSelector((state) => state.getStoredUsers.users);
  const userId = users[0]?.user_id;
  const [incoming, setIncoming] = useState(null);
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    const sub = supabase
      .channel("calls")
      .on(
        "postgres_changes",
        {
          event: "INSERT",
          schema: "public",
          table: "call_requests",
          filter: `to_user=eq.${userId}`,
        },
        (payload) => {
          if (payload.new.status === "pending") {
            setIncoming(payload.new);
          }
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(sub);
    };
  }, [userId]);

  const acceptCall = async () => {
    await supabase
      .from("call_requests")
      .update({ status: "accepted" })
      .eq("id", incoming.id);
    console.log("incomming", incoming.channel, incoming);
    dispatch(
      call({
        inCall: true,
        channel: incoming.channel,
        type: incoming.type,
        caller: incoming.from_user,
      })
    );
    // router.push(`/stream?userId=${userId}`);
    setIncoming(null);
  };

  const rejectCall = async () => {
    await supabase
      .from("call_requests")
      .update({ status: "rejected" })
      .eq("id", incoming.id);
    setIncoming(null);
  };

  if (!incoming) return null;

  return (
    // <div className={styles.modal}>
    //   <p>{/* {incoming.from_user} is calling you ({incoming.type}) */}</p>
    //   <button onClick={acceptCall}>Accept</button>
    //   <button onClick={rejectCall}>Reject</button>
    // </div>

    <div className={styles.modalOverlay}>
      <div className={styles.callModal}>
        {/* <h2>
          {incoming.from_user} is calling you ({incoming.type})
        </h2> */}
        <h2>Gray Ukaegbu</h2>
        <p>Incoming call</p>
        <div className={styles.callButtons}>
          <button className={styles.reject} onClick={rejectCall}>
            <PhoneDisconnect size={18} weight="fill" />
            <span> Decline</span>
          </button>
          <button className={styles.accept} onClick={acceptCall}>
            <Phone size={18} weight="fill" />
            <span> Answer</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default IncomingCallModal;
