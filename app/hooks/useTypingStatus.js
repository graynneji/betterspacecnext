import { useEffect, useRef } from "react";
import { supabase } from "../_lib/supabase";

export function useTypingStatus(userId, otherUserId) {
  const timeoutRef = useRef(null);

  useEffect(() => {
    if (!userId || !otherUserId) return;

    const channel = supabase.channel(`typing-${userId}-${otherUserId}`, {
      config: {
        broadcast: { self: false },
      },
    });

    channel.subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [userId, otherUserId]);

  const sendTyping = () => {
    supabase.channel(`typing-${userId}-${otherUserId}`).send({
      type: "broadcast",
      event: "typing",
      payload: { typing: true, userId },
    });

    // Reset after delay
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      supabase.channel(`typing-${userId}-${otherUserId}`).send({
        type: "broadcast",
        event: "typing",
        payload: { typing: false, userId },
      });
    }, 2000);
  };

  return { sendTyping };
}
