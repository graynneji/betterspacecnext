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

export function useMessPrev(userId) {
  const [conversations, setConversations] = useState({}); // { otherUserId: latestMessage }

  useEffect(() => {
    if (!userId) return;

    setConversations({});

    const fetchConversations = async () => {
      const { data, error } = await supabase
        .from("messages")
        .select("*")
        .or(`sender_id.eq.${userId},reciever_id.eq.${userId}`)
        .order("created_at", { ascending: false }); // newest first

      if (error) {
        console.error(error);
        return;
      }

      const latestPerConversation = {};

      data.forEach((msg) => {
        const otherUserId =
          msg.sender_id === userId ? msg.reciever_id : msg.sender_id;

        if (!latestPerConversation[otherUserId]) {
          latestPerConversation[otherUserId] = msg; // First (newest) message with this other user
        }
      });

      setConversations(latestPerConversation);
    };

    fetchConversations();

    const channel = supabase
      .channel(`chat-${userId}`)
      .on(
        "postgres_changes",
        {
          event: "INSERT",
          schema: "public",
          table: "messages",
        },
        (payload) => {
          const newMessage = payload.new;

          // Only interested if the user is sender or receiver
          if (
            newMessage.sender_id !== userId &&
            newMessage.reciever_id !== userId
          )
            return;

          const otherUserId =
            newMessage.sender_id === userId
              ? newMessage.reciever_id
              : newMessage.sender_id;

          setConversations((prev) => {
            const prevMessage = prev[otherUserId];

            // Update if no message yet or the new one is newer
            if (
              !prevMessage ||
              new Date(newMessage.created_at) > new Date(prevMessage.created_at)
            ) {
              return {
                ...prev,
                [otherUserId]: newMessage,
              };
            }
            return prev;
          });
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [userId]);

  return conversations; // { otherUserId: latestMessage }
}
