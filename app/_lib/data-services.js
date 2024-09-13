import { supabase } from "./supabase";

export async function getQuestions() {
  let { data: question, error } = await supabase
    .from("questionaire")
    .select("*");

  if (error) {
    throw new Error("Cannot find questions");
  }
  return question;
}
