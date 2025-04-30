import { useEffect, useState } from "react";
import { supabase } from "../_lib/supabase";

export function useRealTime(userId, receiverId = null) {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    if (!userId || !receiverId) return;

    setMessages([]);

    const fetchMessages = async () => {
      ///////////////////////////////////////////////////////////
      const { count, error: countError } = await supabase
        .from("messages")
        .select("*", { count: "exact", head: true })
        .or(
          `and(sender_id.eq.${userId},reciever_id.eq.${receiverId}),and(sender_id.eq.${receiverId},reciever_id.eq.${userId})`
        );

      if (countError) {
        console.error("Error counting messages:", countError);
        // setLoading(false);
        return;
      }

      const messagesToFetch = Math.min(count, 30);
      //////////////////////////////////////////////////////

      const { data, error } = await supabase
        .from("messages")
        .select("*")
        // .select("*")
        .or(
          `and(sender_id.eq.${userId},reciever_id.eq.${receiverId}),and(sender_id.eq.${receiverId},reciever_id.eq.${userId})`
        )
        .order("created_at", { ascending: true })
        .range(count - messagesToFetch, count - 1);

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
///////////////////////////////////////////////////////////////////////////////////new///////////////////////////////
// import { useEffect, useState } from "react";
// import { supabase } from "../_lib/supabase";

// export function useRealTime(userId, receiverId = null) {
//   const [messages, setMessages] = useState([]);
//   // const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     if (!userId || !receiverId) return;

//     setMessages([]); // Reset when switching users
//     // setLoading(true);

//     // Get the conversation messages
//     const fetchMessages = async () => {
//       // First, get the total count of messages in this conversation
//       const { count, error: countError } = await supabase
//         .from("messages")
//         .select("*", { count: "exact", head: true })
//         .or(
//           `and(sender_id.eq.${userId},reciever_id.eq.${receiverId}),and(sender_id.eq.${receiverId},reciever_id.eq.${userId})`
//         );

//       if (countError) {
//         console.error("Error counting messages:", countError);
//         // setLoading(false);
//         return;
//       }

//       const messagesToFetch = Math.min(count, 30);

//       // Now fetch the actual messages with proper ordering and pagination
//       const { data, error } = await supabase
//         .from("messages")
//         .select("*")
//         .or(
//           `and(sender_id.eq.${userId},reciever_id.eq.${receiverId}),and(sender_id.eq.${receiverId},reciever_id.eq.${userId})`
//         )
//         .order("created_at", { ascending: true })
//         .range(count - messagesToFetch, count - 1);

//       if (error) {
//         console.error("Error fetching messages:", error);
//       } else if (data) {
//         setMessages(data);
//       }

//       // setLoading(false);
//     };

//     fetchMessages();

//     // Set up real-time subscription
//     const channel = supabase
//       .channel(`chat-${userId}-${receiverId}`)
//       .on(
//         "postgres_changes",
//         {
//           event: "INSERT",
//           schema: "public",
//           table: "messages",
//           filter: `(sender_id=eq.${userId} AND reciever_id=eq.${receiverId}) OR (sender_id=eq.${receiverId} AND reciever_id=eq.${userId})`,
//         },
//         (payload) => {
//           const newMessage = payload.new;
//           // Add new message to the end of the array to maintain chronological order
//           setMessages((prev) => [...prev, newMessage]);
//         }
//       )
//       .subscribe();

//     return () => {
//       supabase.removeChannel(channel);
//     };
//   }, [userId, receiverId]);

//   return messages;
// }
