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
        TypeScript will also narrow the type of data correctly if checked for
        pending and error before accessing it. FetchStatus In addition to the
        status field, you will also get an additional fetchStatus property with
        the following options: fetchStatus === - The query is currently
        fetching. fetchStatus ===- The query wanted to fetch, but it is paused.
        Read more about this in the Network Mode guide. fetchStatus === - The
        query is not doing anything at the moment. Why two different states?
        Background refetches and stale-while-revalidate logic make all
        combinations for status and fetchStatus possible. For example: a query
        in success status will usually be in idle fetchStatus, but it could also
        be in fetching if a background refetch is happening. a query that mounts
        and has no data will usually be in pending status and fetching
        fetchStatus, but it could also be paused if there is no network
        connection. So keep in mind that a query can be in pending state without
        actually fetching data. As a rule of thumb: The status gives information
        about the data: Do we have any or not? The fetchStatus gives information
        about the queryFn: Is it running or not? Further Reading For an
        alternative way of performing status checks, have a look at the
        Community Resources. TypeScript will also narrow the type of data
        correctly if checked for pending and error before accessing it.
        FetchStatus In addition to the status field, you will also get an
        additional fetchStatus property with the following options: fetchStatus
        === - The query is currently fetching. fetchStatus === - The query
        wanted to fetch, but it is paused. Read more about this in the Network
        Mode guide. fetchStatus === - The query is not doing anything at the
        moment. Why two different states? Background refetches and
        stale-while-revalidate logic make all combinations for status and
        fetchStatus possible. For example: a query in success status will
        usually be in idle fetchStatus, but it could also be in fetching if a
        background refetch is happening. a query that mounts and has no data
        will usually be in pending status and fetching fetchStatus, but it could
        also be paused if there is no network connection. So keep in mind that a
        query can be in pending state without actually fetching data. As a rule
        of thumb: The status gives information about the data: Do we have any or
        not? The fetchStatus gives information about the queryFn: Is it running
        or not? Further Reading For an alternative way of performing status
        checks, have a look at the Community Resources.
        {/* <p>Hello {initialPatientInfo[0]?.name}</p> */}
      </div>
    </div>
  );
  //   return <p>Hello {data.user.email}</p>;
}
