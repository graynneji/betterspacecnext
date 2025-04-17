import { useEffect, useState } from "react";
import { supabase } from "../_lib/supabase";

export function useRealTime(userId, recieverId = null) {
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    const fetchMessages = async () => {
      const { data, error } = await supabase
        .from("messages")
        .select("*")
        .or(
          `and(sender_id.eq.${userId},reciever_id.eq.${recieverId}),and(sender_id.eq.${recieverId},reciever_id.eq.${userId})`
        )
        // .or(`sender_id.eq.${userId},reciever_id.eq.${userId}`)
        .order("created_at", { ascending: true });
      if (data) setMessages(data);
      if (error) console.error(error);
    };

    fetchMessages();

    const subscription = supabase
      .channel("messages")
      .on(
        "postgres_changes",
        { event: "INSERT", schema: "public", table: "messages" },
        (payload) => {
          setMessages((prev) => [...prev, payload.new]);
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(subscription);
    };
  }, [userId, recieverId]);
  // console.log(messages);
  return messages;
}
