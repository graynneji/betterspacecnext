"use server";
// import { supabase } from "./supabase";
import { redirect } from "next/navigation";
import { createClient } from "../utils/supabase/server";

const supabase = createClient();
export async function getUserId() {
  const { data: userData, error: userError } = await supabase.auth.getUser();
  if (!userData?.user) {
    redirect("/login");
  }
  const userId = userData?.user?.id;
  const desgn = userData?.user?.user_metadata?.designation;
  return { userId, desgn };
}

export async function getUsers() {
  const { userId } = await getUserId();

  const { data, error } = await supabase
    .from("user")
    .select(
      "user_id, name, therapist_id, therapist(name, therapist_id), patients(*)"
    )
    .eq("user_id", userId);

  if (error) {
    redirect(`/login`);
  }

  return data;
}

export async function getAllPatientsAttachedToTherapist() {
  const { userId, desgn } = await getUserId();
  if (desgn === "patient") return;
  const { data: therapistData, error: therapistError } = await supabase
    .from("therapist")
    .select("*")
    .eq("therapist_id", userId);
  // if (typeof therapistData !== "array") return;
  const { data: patientsTherapist, error } = await supabase
    .from("patients")
    .select("*")
    .eq("therapist", therapistData[0]?.id);
  return patientsTherapist;
}
