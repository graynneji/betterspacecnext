import { useEffect, useState } from "react";
import { supabase } from "../_lib/supabase";

export function useListenTypingStatus(userId, otherUserId) {
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    if (!userId || !otherUserId) return;

    const channel = supabase.channel(`typing-${otherUserId}-${userId}`, {
      config: {
        broadcast: { self: false },
      },
    });

    channel
      .on("broadcast", { event: "typing" }, (payload) => {
        setIsTyping(payload.payload.typing);
      })
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [userId, otherUserId]);

  return { isTyping };
}
