"use client";
import React, { useRef, useState } from "react";
import styles from "./MessageInput.module.css";
import { PaperPlaneRight } from "@phosphor-icons/react/dist/ssr";
import { useSelector } from "react-redux";
import { sendMessage } from "@/app/_lib/actions";
import { useTypingStatus } from "@/app/hooks/useTypingStatus";

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

  const { sendTyping } = useTypingStatus(
    userIds?.senderId,
    userIds?.recieverId
  );

  const handleChange = (e) => {
    sendTyping();
    // setNewMessage(e.target.value);
  };

  return (
    <div className={styles.messageInputContainer}>
      <form
        className={styles.messageForm}
        action={async (formData) => {
          await messageSend(formData);
          // setNewMessage("");
          formRef.current.reset();
        }}
        ref={formRef}
      >
        <div className={styles.textareaWrapper}>
          <textarea
            id="message"
            name="message"
            // value={newMessage}
            onChange={handleChange}
            placeholder="Type your message here..."
            className={styles.messageTextarea}
            rows="1"
            autoComplete="off"
          />
        </div>
        <button
          type="submit"
          className={styles.sendButton}
          aria-label="Send message"
        >
          <PaperPlaneRight size={18} weight="fill" />
        </button>
      </form>
    </div>
  );
}

export default MessageInput;
