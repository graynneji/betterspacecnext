"use server";

import { revalidatePath } from "next/cache";
// import { revalidatePath } from "next/cache";
// import { redirect } from "next/navigation";

// import { createClient } from "@/utils/supabase/server";

///////////////////////////////////////////////////
////////////////////////////////////////////////
import { contactFormSchema } from "../services/validationSchema";
import { createClient } from "../utils/supabase/server";
import pool from "./db";
import { supabase } from "./supabase";
import { redirect } from "next/navigation";

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
  try {
    // await contactFormSchema.validate({
    //   name: fullData.name,
    //   company: fullData.company,
    //   phone: fullData.phone,
    //   email: fullData.email,
    //   message: fullData.message,
    // });
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
    // return { success: true };
    // showToast("Message sent successfully!", { type: "success" });
  } catch (err) {
    // return { success: false, message: err.message };
    // showToast("Message was not sent: " + err.message, { type: "error" });
    // throw new Error("Message was not sent");
  }
}

////////// GET STARTED/////////////////////////////////////
export async function createPatients(selectedQuesAnswers, formData) {
  console.log(selectedQuesAnswers, formData);
  const response = await fetch(`http://www.geoplugin.net/json.gp`);
  const location = await response.json();
  const newPatients = {
    // name: formData.get("")
    ip: location.geoplugin_request,
    city: location.geoplugin_city,
    region: location.geoplugin_region,
    country: location.geoplugin_countryName,
  };
  try {
    const { error } = await supabase.from("patients").insert([newPatients]);
  } catch (error) {
    throw new Error("Acoount creation unsuccessful");
  }
}
////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
/////////////////Signup///////////////////////////////////
////////////////////////////////////////////////////////////

// export async function login(formData) {
//   const supabase = createClient();

//   // type-casting here for convenience
//   // in practice, you should validate your inputs
//   const data = {
//     email: formData.get("email"),
//     password: formData.get("password"),
//   };

//   const { error } = await supabase.auth.signInWithPassword(data);

//   if (error) {
//     redirect("/error");
//   }

//   revalidatePath("/", "layout");
//   redirect("/");
// }

export async function signup(formData) {
  const supabase = createClient();
  const response = await fetch(`http://www.geoplugin.net/json.gp`);
  const location = await response.json();

  const { data: signUpData, error } = await supabase.auth.signUp({
    email: formData.get("email"),
    password: formData.get("password"),
  });
  // console.log(signUpData);

  if (error) {
    // redirect("/error");
    throw new Error("Something went wrong");
  }

  const data = {
    user_id: signUpData.user.id,
    name: formData.get("name"),
    phone: formData.get("phone"),
    //convert to json string
    //use JSON.parse() to convert back to an object
    selected: JSON.stringify(formData.get("selected")),
    ip: location.geoplugin_request,
    city: location.geoplugin_city,
    region: location.geoplugin_region,
    country: location.geoplugin_countryName,
  };

  const { error: InsertError } = await supabase.from("patients").insert([
    // {
    //   user_id: signUpData.user.id, // assuming 'profiles' table has 'user_id' as a foreign key
    //   name: formData.get("name"),
    //   phone: formData.get("phone"),
    //   selected: formData.get("selected").json(),
    // },
    data,
  ]);

  if (InsertError) {
    console.log(InsertError);
    // redirect("/error");
    throw new Error("Something went wrong");
  }

  revalidatePath("/", "layout");
  redirect("/care");
}
