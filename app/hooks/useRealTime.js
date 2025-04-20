// import { useEffect, useState } from "react";
// import { supabase } from "../_lib/supabase";

// export function useRealTime(userId, recieverId = null) {
//   const [messages, setMessages] = useState([]);
//   useEffect(() => {
//     const fetchMessages = async () => {
//       const { data, error } = await supabase
//         .from("messages")
//         .select("*")
//         .or(
//           `and(sender_id.eq.${userId},reciever_id.eq.${recieverId}),and(sender_id.eq.${recieverId},reciever_id.eq.${userId})`
//         )
//         // .or(`sender_id.eq.${userId},reciever_id.eq.${userId}`)
//         .order("created_at", { ascending: true });
//       if (data) setMessages(data);
//       if (error) console.error(error);
//     };

//     fetchMessages();

//     const subscription = supabase
//       .channel("messages")
//       .on(
//         "postgres_changes",
//         { event: "INSERT", schema: "public", table: "messages" },
//         (payload) => {
//           setMessages((prev) => [...prev, payload.new]);
//         }
//       )
//       .subscribe();

//     return () => {
//       supabase.removeChannel(subscription);
//     };
//   }, [userId, recieverId]);

//   return messages;
// }

import { useEffect, useState } from "react";
import { supabase } from "../_lib/supabase";

export function useRealTime(userId, receiverId = null) {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    if (!userId || !receiverId) return;

    setMessages([]); // Reset when switching users

    const fetchMessages = async () => {
      const { data, error } = await supabase
        .from("messages")
        .select("*")
        .or(
          `and(sender_id.eq.${userId},reciever_id.eq.${receiverId}),and(sender_id.eq.${receiverId},reciever_id.eq.${userId})`
        )
        .order("created_at", { ascending: true });

      if (data) setMessages(data);
      if (error) console.error(error);
    };

    fetchMessages();

    const channel = supabase
      .channel(`chat-${userId}-${receiverId}`)
      .on(
        "postgres_changes",
        {
          event: "INSERT",
          schema: "public",
          table: "messages",
        },
        (payload) => {
          const newMessage = payload.new;

          const isBetweenCurrentUsers =
            (newMessage.sender_id === userId &&
              newMessage.reciever_id === receiverId) ||
            (newMessage.sender_id === receiverId &&
              newMessage.reciever_id === userId);

          if (isBetweenCurrentUsers) {
            setMessages((prev) => [...prev, newMessage]);
          }
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [userId, receiverId]);

  return messages;
}
