"use client";
import React, { useEffect } from "react";
import Care from "../Care/Care";
import MessageInput from "../MessageInput/MessageInput";
import AppNav from "../AppNav/AppNav";
import styles from "./TherapistDash.module.css";
import FooterMenu from "../FooterMenu/FooterMenu";
import { useSelector, useDispatch } from "react-redux";
import { getTherapistPatients } from "@/app/store/getTherapistPatientsSlice";
import Image from "next/image";
import Logo from "@/public/Company Logo.svg";
import Button from "../Button/Button";
function TherapistDash({ userInfo, patientsTherapist }) {
  const dispatch = useDispatch();
  const patientRecieverId = useSelector(
    (state) => state.getPatientRecvId.patientRecieverId
  );
  useEffect(() => {
    dispatch(getTherapistPatients(patientsTherapist));
  }, [patientsTherapist, dispatch]);
  console.log(patientRecieverId, "watchhhhoeur there");
  if (Object.keys(patientRecieverId).length === 0) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh", // full screen height
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "5px", // more spacious
            padding: "32px",
            textAlign: "center",
          }}
        >
          <Image width={200} height={80} src={Logo} alt="Logo" />
          <p style={{ maxWidth: "400px", fontSize: "16px", lineHeight: "1.5" }}>
            Start therapy with patients by clicking on a patient by the sidebar
          </p>
          <Button>Logout</Button>
        </div>
      </div>
    );
  }
  return (
    <section style={{ width: "auto" }} className={styles.appLayout}>
      <AppNav userInfo={userInfo} />
      <div
        style={{
          flexGrow: 1,
          overflowY: "auto",
          paddingTop: "60px",
          paddingBottom: "60px",
          paddingRight: "20px",
          paddingLeft: "20px",
        }}
      >
        {/* <Care userInfo={userInfo} patientsTherapist={patientsTherapist} /> */}
        <Care userInfo={userInfo} />
      </div>
      <div className={styles.rare}>
        <MessageInput patientsTherapist={patientsTherapist} />
        <FooterMenu />
      </div>
    </section>
  );
}

export default TherapistDash;
