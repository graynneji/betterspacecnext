"use client";
import React from "react";
import styles from "./PatientsCard.module.css"; // Optional CSS file for styling
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { getPatientRecvId } from "@/app/store/getPatientRecvIdSlice";

const PatientsCard = ({ image = null }) => {
  const therapistPatients = useSelector(
    (state) => state.getTherapistPatients.therapistPatients
  );

  const dispatch = useDispatch();

  const handleSelectPatient = (patientId) => {
    dispatch(getPatientRecvId(patientId));
  };
  // if (!therapistPatients) {
  //   return <p>No patients found</p>;
  // }
  return (
    <>
      {therapistPatients?.map((item, index) => (
        <div
          key={index}
          className={styles.profileCard}
          onClick={() =>
            handleSelectPatient({
              patientId: item?.patient_id,
              patientName: item?.name,
            })
          }
        >
          <div className={styles.profileAvatar}>
            {item?.name?.charAt(0).toUpperCase()}
          </div>
          <h2 className={styles.profileName}>{item?.name}</h2>
        </div>
      ))}
    </>
  );
};

export default PatientsCard;
