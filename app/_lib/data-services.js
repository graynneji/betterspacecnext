// import { supabase } from "./supabase";
import { redirect } from "next/navigation";
import { createClient } from "../utils/supabase/server";

export async function getPatients() {
  const supabase = createClient();
  const { data: patientData, error: userError } = await supabase.auth.getUser();

  const patientId = patientData.user.id;

  const { data, error } = await supabase
    .from("patients")
    .select("*")
    .eq("user_id", patientId);

  if (error) {
    throw new Error("Patient could not get loaded");
  }

  return data;
}
