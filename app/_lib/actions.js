"use server";
import { contactFormSchema } from "../services/validationSchema";
import pool from "./db";
import { supabase } from "./supabase";

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
export async function createPatients(formData) {
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
