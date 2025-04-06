"use client";
import { createClient, RealtimeChannel } from "@supabase/supabase-js";
import styles from "./Care.module.css";
import Header from "../Header/Header";
import Nav from "../Nav/Nav";
import { supabase } from "../../_lib/supabase";
import { signOut } from "../../_lib/actions";
import { useEffect, useState, useTransition, useRef } from "react";
import { useRealTime } from "../../hooks/useRealTime";
import { useDispatch } from "react-redux";
import { getUsers } from "../../store/getUsersSlice";

export default function Care({ userInfo }) {
  const [newMessage, setNewMessage] = useState("");
  //ref to the last
  const chatEndRef = useRef(null);
  const chatContainerRef = useRef(null);
  const userId = userInfo[0]?.user_id;
  // const therapistId = userInfo[0]?.therapist.therapist_id;
  const dispatch = useDispatch();
  useEffect(() => {
    if (userInfo && userInfo.length > 0) {
      dispatch(getUsers(userInfo)); // Dispatch users to Redux
    }
  }, [userInfo, dispatch]);
  const messages = useRealTime(userId);
  console.log(messages);
  // receiverId
  console.log("oa", userInfo);
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    // scroll to the last message
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  const handleSignout = () => {
    startTransition(signOut());
  };

  return (
    <div className={styles.careContainer}>
      <p>Hello {userInfo[0]?.name}</p>
      <button onClick={handleSignout} disabled={isPending}>
        {isPending ? "Signing Out..." : "Sign Out"}
      </button>
      <div className={styles.chatCon} ref={chatContainerRef}>
        {messages?.map((msg) => (
          <div
            key={msg.id}
            className={styles.message}
            style={{
              alignSelf: msg.sender_id === userId ? "flex-end" : "flex-start",
              backgroundColor: msg.reciever_id === userId ? "#325343" : "#ddd",
              color: msg.reciever_id === userId ? "#ffffff" : "",
            }}
          >
            {msg.message}
          </div>
        ))}
        <div ref={chatEndRef} /> {/* ⬅️ Dummy div to scroll to */}
      </div>
    </div>
  );
  //   return <p>Hello {data.user.email}</p>;
}
