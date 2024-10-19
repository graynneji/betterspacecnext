"use server";
import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import { contactFormSchema } from "../services/validationSchema";
import { createClient } from "../utils/supabase/server";
import pool from "./db";
import { supabase } from "./supabase";
import { redirect } from "next/navigation";
import { signUpschema, loginSchema } from "./validationSchema";

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

///////////////////////////////////////////////////////////////////////// GET STARTED///////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
/////////////////Signin/Signup/////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////

export async function login(formData) {
  const supabase = createClient();

  const validatedFields = loginSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!validatedFields.success) {
    return JSON.stringify({
      error: validatedFields.error.flatten().fieldErrors,
      status: "450",
    });
  }
  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = {
    email: formData.get("email"),
    password: formData.get("password"),
  };

  const { error } = await supabase.auth.signInWithPassword(data);

  if (error.code === "invalid_credentials") {
    return JSON.stringify({
      error: "Invalid email and password",
    });
  }
  if (error) {
    return JSON.stringify({
      error: "Something went wrong try again",
    });
    // return { error: JSON.parse(JSON.stringify(error)) };
  }

  if (error.code === "email_not_confirmed") {
    return JSON.stringify({
      error: "Please confirm your email",
    });
  }

  if (!error) {
    return JSON.stringify({
      error: "There is no error",
    });
  }
}

export async function signup(selectedQuesAnswers, formData) {
  const supabase = createClient();
  const response = await fetch(`http://www.geoplugin.net/json.gp`);
  const location = await response.json();

  const validatedFields = signUpschema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
    name: formData.get("name"),
    phone: formData.get("phone"),
  });

  if (!validatedFields.success) {
    return "Invalid inputs, please check your inputs";
  }

  const { data: signUpData, error } = await supabase.auth.signUp({
    email: formData.get("email"),
    password: formData.get("password"),
  });
  console.log(signUpData);
  if (error) {
    console.log(error);
    return "Error, signing up please try again";
  }

  const data = {
    user_id: signUpData.user.id,
    name: formData.get("name"),
    phone: formData.get("phone"),
    email: formData.get("email"),
    //convert to json string
    //use JSON.parse() to convert back to an object
    selected: JSON.stringify(selectedQuesAnswers),
    ip: location.geoplugin_request,
    city: location.geoplugin_city,
    region: location.geoplugin_region,
    country: location.geoplugin_countryName,
  };

  const { error: InsertError } = await supabase.from("patients").insert([data]);

  if (InsertError) {
    console.log(InsertError);
    return "An account is associated with the email";

    // return { error: JSON.parse(JSON.stringify(InsertError)), source: "Insert data" };
  }

  revalidatePath("/", "layout");
  redirect(`/verify/${formData.get("email")}`);
}
