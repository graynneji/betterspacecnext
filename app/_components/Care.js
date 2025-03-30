"use client";
// import { createClient } from "../utils/supabase/server";
// import { getPatients } from "../_lib/data-services";
import styles from "./Care.module.css";
import Header from "./Header";
import Nav from "./Nav";
import { signOut } from "../_lib/actions";
import { useEffect, useState, useTransition } from "react";

import Image from "next/image";

export default function Care() {
  // const [patientInfo, setPatientInfo] = useState(null);
  // useEffect(() => {
  //   async function fetchPatients() {
  //     const data = await getPatients();
  //     setPatientInfo(data);
  //   }
  //   fetchPatients();
  // }, []);
  const [isPending, startTransition] = useTransition();

  const handleSignout = () => {
    startTransition(signOut());
  };

  // const selected = JSON.parse(patientInfo[0].selected);
  // Handle loading state
  // if (!patientInfo) {
  //   return <p>Loading...</p>;
  // }
  return (
    <div className={styles.careContainer}>
      {/* <p>Hello {patientInfo[0].name}</p> */}
      {/* <button onClick={handleSignout} disabled={isPending}>
        {isPending ? "Signing Out..." : "Sign Out"}
      </button> */}
      <div className={styles.chatCon}>ui</div>
    </div>
  );
  //   return <p>Hello {data.user.email}</p>;
}
