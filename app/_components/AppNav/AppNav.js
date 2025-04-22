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
import PatientsCard from "../PatientsCard/PatientsCard";
import ProfileDropdown from "../ProfileDropDown/ProfileDropDown";

function AppNav({ userInfo }) {
  // const userInfo = useSelector((state) => state.getuserInfo.userInfo);
  // const userInfo = await getUsers();
  const name = userInfo[0]?.name;
  const patientRecieverId = useSelector(
    (state) => state.getPatientRecvId.patientRecieverId
  );
  console.log("pahhhh", patientRecieverId);
  const recieversName = userInfo[0]?.therapist
    ? "Dr. Thompson"
    : // ? userInfo[0]?.therapist?.name
      patientRecieverId?.patientName;

  return (
    <div className={styles.styledNav}>
      <h2 className={styles.profile}>
        {userInfo[0]?.therapist ? "Therapy with -  " : "Patient - "}
        <span className={styles.therName}>{recieversName}</span>
      </h2>

      <div className={styles.rightNav}>
        <VideoCamera size={26} color="#2E8B57" weight="fill" />

        <PhoneCall size={26} color="#2E8B57" weight="fill" />

        <PatientsCard name={name} />
      </div>

      <ProfileDropdown />
    </div>
  );
}

export default AppNav;
