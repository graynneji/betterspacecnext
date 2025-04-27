"use client";
import React from "react";
import styles from "./AppNav.module.css";
import { v4 as uuidv4 } from "uuid";
import Profile from "@/public/applicationIcon/confident-b.png";
import Image from "next/image";
// import { useSelector } from "react-redux";
import { Phone, Sparkle, VideoCamera } from "@phosphor-icons/react/dist/ssr";
import { PhoneCall } from "@phosphor-icons/react/dist/ssr";
import { getUsers } from "@/app/_lib/data-services";
import { useDispatch, useSelector } from "react-redux";
import PatientsCard from "../PatientsCard/PatientsCard";
import ProfileDropdown from "../ProfileDropDown/ProfileDropDown";
import { call } from "@/app/store/callSlice";
import { supabase } from "@/app/_lib/supabase";

function AppNav({ userInfo }) {
  const dispatch = useDispatch();
  // const userInfo = useSelector((state) => state.getuserInfo.userInfo);
  // const userInfo = await getUsers();
  const name = userInfo[0]?.name;
  const patientRecieverId = useSelector(
    (state) => state.getPatientRecvId.patientRecieverId
  );

  const userId = userInfo[0]?.user_id;
  const toUserId =
    userInfo[0]?.therapist?.therapist_id || patientRecieverId?.patientId;

  const recieversName = userInfo[0]?.therapist
    ? "Dr. Thompson"
    : // ? userInfo[0]?.therapist?.name
      patientRecieverId?.patientName;

  // Initiate audio or video call
  const callUser = async (type = "video") => {
    const channel = uuidv4();
    await supabase.from("call_requests").insert([
      {
        from_user: userId,
        to_user: toUserId,
        type,
        status: "pending",
        channel,
      },
    ]);
    console.log("dispatch");
    dispatch(call({ inCall: true, channel, type, caller: userId }));
  };

  return (
    <div className={styles.styledNav}>
      <h2 className={styles.profile}>
        {userInfo[0]?.therapist ? "Therapy with -  " : "Patient - "}
        <span className={styles.therName}>{recieversName}</span>
      </h2>

      <div className={styles.rightNav}>
        <VideoCamera
          size={26}
          color="#2E8B57"
          weight="fill"
          onClick={() => callUser("video")}
        />

        <PhoneCall
          size={26}
          color="#2E8B57"
          weight="fill"
          onClick={() => callUser("audio")}
        />

        <PatientsCard name={name} type="nav" />
      </div>

      <ProfileDropdown />
    </div>
  );
}

export default AppNav;
