"use client";
import React, { useRef, useState } from "react";
import Input from "../Input/Input";
import styles from "./MessageInput.module.css";
import { PaperPlaneRight } from "@phosphor-icons/react/dist/ssr";
import { useSelector } from "react-redux";
import { sendMessage } from "@/app/_lib/actions";

function MessageInput() {
  const users = useSelector((state) => state.getStoredUsers.users);
  const patientRecieverId = useSelector(
    (state) => state.getPatientRecvId.patientRecieverId
  );
  const userIds = {
    senderId: users[0]?.user_id,
    recieverId:
      users[0]?.therapist?.therapist_id || patientRecieverId?.patientId,
  };

  const messageSend = sendMessage.bind(null, userIds);
  const [newMessage, setNewMessage] = useState("");
  const formRef = useRef(null);
  return (
    <div className={styles.searchCon}>
      <form
        action={async (formData) => {
          await messageSend(formData);
          formRef.current.reset();
        }}
        ref={formRef}
      >
        <Input
          inputType="textarea"
          chat="chat"
          id="message"
          name="message"
          value={newMessage}
          placeholder="Type your message here..."
        />
        <div type="submit" className={styles.sendCon}>
          <button className={styles.send}>
            {" "}
            <PaperPlaneRight size={18} color="white" />
          </button>
        </div>
      </form>
    </div>
  );
}

export default MessageInput;
