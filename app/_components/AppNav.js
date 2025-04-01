"use client";
import React from "react";
import styles from "./AppNav.module.css";
import Profile from "@/public/applicationIcon/confident-b.png";
import Image from "next/image";
import { useSelector } from "react-redux";
import { Phone, Sparkle, VideoCamera } from "@phosphor-icons/react";

function AppNav() {
  const users = useSelector((state) => state.getUsers.users);

  const recieversName = users[0]?.patients
    ? users[0]?.patients?.name
    : users[0]?.therapist?.name;

  return (
    <div className={styles.styledNav}>
      {/* <div className={styles.proCon}> */}
      <h2 className={styles.profile}>
        Therapy with <span className={styles.therName}>{recieversName}</span>
      </h2>
      {/* </div> */}
      <div className={styles.rightNav}>
        <VideoCamera size={24} color="#B0B0B0" />
        <Phone size={24} color="#B0B0B0" />
        <Sparkle size={24} color="#4CAF50" weight="fill" />
      </div>
    </div>
  );
}

export default AppNav;
