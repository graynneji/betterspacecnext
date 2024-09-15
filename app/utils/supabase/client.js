import { createBrowserClient } from "@supabase/ssr";

export function createClint() {
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABSE_URL,
    process.env.NEXT_PUBLIC_SUPABSE_ANON_KEY
  );
}
