"use server";
// import { supabase } from "./supabase";
import { redirect } from "next/navigation";
import { createClient } from "../utils/supabase/server";

export async function getUserId() {
  const supabase = createClient();
  const { data: userData, error: userError } = await supabase.auth.getUser();
  if (!userData?.user) {
    console.log(userData, userError);
    redirect("/login");
  }
  const userId = userData?.user?.id;
  const desgn = userData?.user?.user_metadata?.designation;
  return { userId, desgn };
}

export async function getUsers() {
  const { userId } = await getUserId();
  const supabase = createClient();
  const { data, error } = await supabase
    .from("user")
    .select(
      "user_id, name, therapist_id, therapist(name, therapist_id, authority, license, specialization, summary), patients(*)"
    )
    .eq("user_id", userId);

  if (error) {
    console.log(error);
    redirect(`/login`);
  }

  return data;
}

export async function getTherpistInfo() {
  const supabase = createClient();
  const { userId, desgn } = await getUserId();
  const { data: therapistData, error: therapistError } = await supabase
    .from("therapist")
    .select("id, balance, pending, total_earning")
    .eq("therapist_id", userId);
  console.log(therapistError);
  return { therapistData, desgn };
}

export async function getAllPatientsAttachedToTherapist() {
  // const { userId, desgn } = await getUserId();
  const supabase = createClient();
  const { therapistData, desgn } = await getTherpistInfo();
  if (desgn === "patient") return;
  // const { data: therapistData, error: therapistError } = await supabase
  //   .from("therapist")
  //   .select("*")
  //   .eq("therapist_id", userId);

  const { data: patientsTherapist, error } = await supabase
    .from("patients")
    .select(
      "id, name, therapist, patient_id, appointment, is_subscribed, subscription"
    )
    .eq("therapist", therapistData[0]?.id);
  return patientsTherapist;
}

export async function getNote(patientId) {
  const supabase = createClient();
  const { data: notes, error } = await supabase
    .from("patients")
    .select("notes")
    .eq("patient_id", patientId)
    .single();

  return notes;
}

export async function updateNote(patientId, notes, color) {
  const supabase = createClient();

  const { data: patientData, error } = await supabase
    .from("patients")
    .select("notes")
    .eq("patient_id", patientId)
    .single();

  if (error) {
    console.error("Fetch error:", error);
    return null;
  }

  const patientNotes = patientData?.notes ?? [];

  const newNote = {
    id: Date.now(),
    text: notes,
    color: color,
    timestamp: new Date().toISOString(),
  };

  const newNotes = [...patientNotes, newNote];

  const { data, error: updateNotesError } = await supabase
    .from("patients")
    .update({ notes: newNotes })
    .eq("patient_id", patientId)
    .select();

  if (updateNotesError) {
    console.error("Update error:", updateNotesError);
    return null;
  }

  return data;
}

export async function getQuestionaire(patientId) {
  const supabase = createClient();

  const { data: questionaire, error } = await supabase
    .from("patients")
    .select("selected")
    .eq("patient_id", patientId);

  if (error) {
    console.log(error);
  }
  console.log(questionaire);
  return questionaire;
}

// export async function getFinance(){
// const supabase = createClient()

// const {data, error}= supabase.from("transactions").select("")
// }
