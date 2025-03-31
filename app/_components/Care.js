"use client";
// import { createClient } from "../utils/supabase/server";
// import { getPatients } from "../_lib/data-services";
import styles from "./Care.module.css";
import Header from "./Header";
import Nav from "./Nav";
import { signOut } from "../_lib/actions";
// import { useEffect, useState, useTransition } from "react";

import Image from "next/image";
import { useQuery } from "@tanstack/react-query";
import { getPatients } from "../_lib/data-services";
// import { useGetPatients } from "../hooks/useGetPatients";

export default function Care({ initialPatientInfo }) {
  // export default function Care({ initialPatientInfo }) {
  console.log(initialPatientInfo);
  // const { isLoading, error, patientInfo, isFetching } = useGetPatients();
  // console.log(patientInfo);
  const {
    data: patientInfo,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["patients"],
    queryFn: getPatients,
    initialData: initialPatientInfo, // Use preloaded data
  });

  console.log("oa", patientInfo);
  // const [isPending, startTransition] = useTransition();

  const handleSignout = () => {
    // startTransition(signOut());
  };

  // const selected = JSON.parse(patientInfo[0].selected);
  // Handle loading state
  // if (!patientInfo) {
  //   return <p>Loading...</p>;
  // }
  return (
    <div className={styles.careContainer}>
      {/* <p>Hello {patientInfo[0]?.name}</p> */}
      {/* <button onClick={handleSignout} disabled={isPending}>
        {isPending ? "Signing Out..." : "Sign Out"}
      </button> */}
      <div className={styles.chatCon}>
        {" "}
        {/* <p>Hello {initialPatientInfo[0]?.name}</p> */}
      </div>
    </div>
  );
  //   return <p>Hello {data.user.email}</p>;
}
