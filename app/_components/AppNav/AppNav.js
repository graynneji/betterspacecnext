"use client";
import React from "react";
import styles from "./AppNav.module.css";
import Profile from "@/public/applicationIcon/confident-b.png";
import Image from "next/image";
// import { useSelector } from "react-redux";
import { Phone, Sparkle, VideoCamera } from "@phosphor-icons/react/dist/ssr";
import { PhoneCall } from "@phosphor-icons/react/dist/ssr";
import { getUsers } from "@/app/_lib/data-services";
import { useSelector } from "react-redux";

function AppNav({ userInfo }) {
  // const userInfo = useSelector((state) => state.getuserInfo.userInfo);
  // const userInfo = await getUsers();
  const patientRecieverId = useSelector(
    (state) => state.getPatientRecvId.patientRecieverId
  );
  console.log("pahhhh", patientRecieverId);
  const recieversName = userInfo[0]?.therapist
    ? "Dr. Maya Thompson"
    : // ? userInfo[0]?.therapist?.name
      patientRecieverId?.patientName;

  return (
    <div className={styles.styledNav}>
      {/* <div className={styles.proCon}> */}
      <h2 className={styles.profile}>
        {userInfo[0]?.therapist ? "Therapy with -  " : "Patient - "}
        <span className={styles.therName}>{recieversName}</span>
      </h2>
      {/* </div> */}
      <div className={styles.rightNav}>
        <VideoCamera size={26} color="#325343" weight="fill" />
        {/* <Phone size={24} color="#B0B0B0" /> */}
        <PhoneCall size={26} weight="fill" color="#325343" />
        {/* <Sparkle size={24} color="#4CAF50" weight="fill" /> */}
      </div>
    </div>
  );
}

export default AppNav;
