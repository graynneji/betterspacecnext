"use server";
// import { supabase } from "./supabase";
import { redirect } from "next/navigation";
import { createClient } from "../utils/supabase/server";

export async function getPatients() {
  const supabase = createClient();
  const { data: userData, error: userError } = await supabase.auth.getUser();

  const userId = userData?.user?.id;

  const { data, error } = await supabase
    .from("users")
    .select("*, therapist(*), patients(*)")
    .eq("user_id", userId);

  if (error) {
    redirect(`/login`);
  }

  return data;
}
