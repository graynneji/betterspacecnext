"use server";
import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import { contactFormSchema } from "../services/validationSchema";
import { createClient } from "../utils/supabase/server";
import pool from "./db";
import { supabase } from "./supabase";
import { redirect } from "next/navigation";
import { signUpschema, loginSchema } from "./validationSchema";
import { ErrorMessages } from "@/app/enums/error.enums";

////////////////////////// Contect Us & Join Us ////////////////////////////////////////////////////

export async function submitForm(prevState, formData) {
  const response = await fetch(`http://www.geoplugin.net/json.gp`);
  const location = await response.json();
  const fullData = {
    name: formData.get("name"),
    company: formData.get("company"),
    phone: formData.get("phone"),
    email: formData.get("email"),
    message: formData.get("message"),
    ip: location.geoplugin_request,
    city: location.geoplugin_city,
    region: location.geoplugin_region,
    country: location.geoplugin_countryName,
  };

  const client = await pool.connect();

  const queryMes = `INSERT INTO contacts(name, company, phone, email,message, ip, city, region, country)
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)`;
  const values = [
    fullData.name,
    fullData.company,
    fullData.phone,
    fullData.email,
    fullData.message,
    fullData.ip,
    fullData.city,
    fullData.region,
    fullData.country,
  ];
  await client.query(queryMes, values);
  client.release();
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////// Login //////////////////////////////////////////

export async function login(formData) {
  console.log("loggingIn", formData);
  const supabase = createClient();

  const validatedFields = loginSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  });
  // try {
  if (!validatedFields.success) {
    // return "Invalid inputs, please check your inputs";
    const message = "Invalid inputs, please check your inputs";
    redirect(`/login?error=${encodeURIComponent(message)}`);
  }
  // type-casting here for convenience
  // in practice, you should validate your inputs

  const { data, error } = await supabase.auth.signInWithPassword({
    email: formData.get("email"),
    password: formData.get("password"),
  });

  console.log("data", error, data);
  const designation = data?.user?.user_metadata?.designation == "therapist";
  // console.log(designation);
  if (!error) {
    const redirectUrl = designation ? "/dashboard" : "/therapy";
    return redirectUrl;
  } else {
    const message = ErrorMessages[error?.code] || ErrorMessages.default;
    redirect(`/login?error=${encodeURIComponent(message)}`);
  }
}

//////////////////////////////////////////////////////////// Get started /////////////////////////////////////////////////////////////

export async function signup(selectedQuesAnswers, formData) {
  console.log(formData, selectedQuesAnswers);
  const supabase = createClient();
  const response = await fetch(`http://www.geoplugin.net/json.gp`);
  const location = await response.json();
  const options = typeof selectedQuesAnswers === "string";
  const type = options ? selectedQuesAnswers : "patient";
  console.log(formData, formData.get("email"));
  const validatedFields = signUpschema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
    name: formData.get("name"),
    phone: formData.get("phone"),
  });

  if (!validatedFields.success) {
    return `Invalid inputs, please check your inputs ${validatedFields.error}`;
  }
  const { data: signUpData, error } = await supabase.auth.signUp({
    email: formData.get("email"),
    password: formData.get("password"),
    options: {
      data: {
        full_name: formData.get("name"),
        designation: options ? selectedQuesAnswers : "patient",
      },
    },
  });

  if (error) {
    return "Error, signing up please try again";
  }
  const therapistId = Math.random() < 0.5 ? 6 : 6;

  const userData = {
    user_id: signUpData.user.id,
    name: formData.get("name"),
    phone: formData.get("phone"),
    email: formData.get("email"),
    specialization: formData.get("specialization"),
    role: options ? selectedQuesAnswers : undefined,
    license: formData.get("license"),
    authority: formData.get("authority"),
    gender: formData.get("gender"),
    dob: formData.get("dob"),
    //convert to json string
    //use JSON.parse() to convert back to an object
    selected: !options ? JSON.stringify(selectedQuesAnswers) : undefined,
    therapist_id: !options ? therapistId : null,
    // therapist_id: selectedQuesAnswers !== "therapist" ? therapistId : null,
    ip: location.geoplugin_request,
    city: location.geoplugin_city,
    region: location.geoplugin_region,
    country: location.geoplugin_countryName,
  };

  const { error: InsertError } = await supabase
    .from("user")
    .insert([userData])
    .select();

  if (InsertError) {
    console.log(InsertError);
    return "An account is associated with the email";
  }

  if (options) {
    const therapistData = {
      therapist_id: signUpData.user.id,
      name: formData.get("name"),
      email: formData.get("email"),
    };

    await supabase.from("therapist").insert([therapistData]);
  } else {
    // await supabase
    // .from('therapist')
    // .select('*')
    // .or(`id.eq.${therapistId}`);

    const patientsData = {
      patient_id: signUpData.user.id,
      therapist: therapistId,
      name: formData.get("name"),
      email: formData.get("email"),
    };
    await supabase.from("patients").insert([patientsData]);
  }

  revalidatePath("/", "layout");
  redirect(`/verify/${formData.get("email")}?type=${type}`);
}

/////////////////////////////////////////////////// Logout ///////////////////////////////////////////////////////

export async function signOut() {
  const supabase = createClient();
  try {
    await supabase.auth.signOut();
    // revalidatePath("/", "layout");
    redirect(`/login`);
  } catch (error) {
    return `Error signingout ${error}`;
  }
}

///////////////////////////////////////////// send message ////////////////////////////////////////////////////

export const sendMessage = async (users, formData) => {
  const newMessage = formData.get("message");
  if (!newMessage.trim()) return;

  const { error } = await supabase.from("messages").insert([
    {
      message: newMessage,
      sender_id: users?.senderId,
      reciever_id: users?.recieverId,
    },
  ]);

  if (error) `Error sending message: ${error}`;
};
