import { useEffect, useState } from "react";
import { supabase } from "../_lib/supabase";

export function useRealTime(userId) {
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    const fetchMessages = async () => {
      const { data, error } = await supabase
        .from("messages")
        .select("*")
        .or(`sender_id.eq.${userId},reciever_id.eq.${userId}`)
        .order("created_at", { ascending: true });
      console.log(data);
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
  }, [userId]);
  console.log(messages);
  return messages;
}
