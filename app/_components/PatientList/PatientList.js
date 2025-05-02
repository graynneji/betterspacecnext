"use client";
import { useState, useEffect } from "react";
import {
  Calendar,
  Clock,
  User,
  CaretRight,
  Search,
  PlusCircle,
} from "@phosphor-icons/react/dist/ssr";
import styles from "./PatientList.module.css";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
// Mock data for patients
const mockPatients = [
  {
    id: 1,
    name: "Sarah Johnson",
    lastAppointment: "2025-04-25T14:30:00",
    upcomingAppointment: "2025-05-02T14:30:00",
    status: "Confirmed",
    notes: "Working on anxiety management techniques",
  },
  {
    id: 2,
    name: "Michael Chen",
    lastAppointment: "2025-04-28T10:00:00",
    upcomingAppointment: "2025-05-05T10:00:00",
    status: "Confirmed",
    notes: "Progress with depression treatment plan",
  },
  {
    id: 3,
    name: "Jennifer Smith",
    lastAppointment: "2025-04-27T16:15:00",
    upcomingAppointment: "2025-05-04T16:15:00",
    status: "Rescheduling",
    notes: "Family therapy sessions ongoing",
  },
  {
    id: 4,
    name: "Robert Williams",
    lastAppointment: "2025-04-22T11:45:00",
    upcomingAppointment: "2025-05-01T13:00:00",
    status: "Confirmed",
    notes: "Trauma-focused CBT",
  },
  {
    id: 5,
    name: "Emily Davis",
    lastAppointment: "2025-04-24T09:30:00",
    upcomingAppointment: "2025-05-08T09:30:00",
    status: "Confirmed",
    notes: "Stress management strategies",
  },
];

// Format date to readable string
const formatDate = (dateString) => {
  const options = { weekday: "short", month: "short", day: "numeric" };
  return new Date(dateString).toLocaleDateString("en-US", options);
};

// Format time to readable string
const formatTime = (dateString) => {
  const options = { hour: "numeric", minute: "numeric", hour12: true };
  return new Date(dateString).toLocaleTimeString("en-US", options);
};

// Calculate days until appointment
const getDaysUntil = (dateString) => {
  const today = new Date();
  const appointmentDate = new Date(dateString);
  const diffTime = appointmentDate - today;
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  if (diffDays === 0) return "Today";
  if (diffDays === 1) return "Tomorrow";
  if (diffDays < 0) return `${Math.abs(diffDays)} days ago`;
  return `In ${diffDays} days`;
};

// Status badge component
const StatusBadge = ({ status }) => {
  let statusClass = styles.statusDefault;

  if (status === "Confirmed") {
    statusClass = styles.statusConfirmed;
  } else if (status === "Rescheduling") {
    statusClass = styles.statusRescheduling;
  } else if (status === "Canceled") {
    statusClass = styles.statusCanceled;
  }

  return (
    <span className={`${styles.statusBadge} ${statusClass}`}>{status}</span>
  );
};

export default function PatientList({ patient, filteredPatients }) {
  //   const [patients, setPatients] = useState([]);
  //   const [filteredPatients, setFilteredPatients] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedPatient, setSelectedPatient] = useState(null);
  const route = useRouter();

  console.log("123", patient);
  // useEffect(() => {
  //   // Simulate API fetch
  //   setPatients(mockPatients);
  //   setFilteredPatients(mockPatients);
  // }, []);

  // const handleSearch = (e) => {
  //   const query = e.target.value.toLowerCase();
  //   setSearchQuery(query);

  //   if (query.trim() === "") {
  //     setFilteredPatients(patients);
  //   } else {
  //     const filtered = patients.filter((patient) =>
  //       patient.name.toLowerCase().includes(query)
  //     );
  //     setFilteredPatients(filtered);
  //   }
  // };
  const handleFullProfile = (id, name) => {
    route.push(`/dashboard/patient?id=${id}&name=${name}`);
  };
  return (
    <>
      <div className={styles.listContainer}>
        {!patient ? (
          // {filteredPatients.length === 0 ? (
          <div className={styles.emptyMessage}>No patients found</div>
        ) : (
          <ul className={styles.patientList}>
            {/* {filteredPatients.map((patient) => ( */}
            <li
              key={patient.id}
              className={`${styles.patientItem} ${
                selectedPatient === patient.id ? styles.selectedPatient : ""
              }`}
              onClick={() =>
                setSelectedPatient(
                  patient.id === selectedPatient ? null : patient.id
                )
              }
              //   className={styles.patientItem}
            >
              <div className={styles.patientCard}>
                <div className={styles.patientHeader}>
                  <div className={styles.patientNameContainer}>
                    <div className={styles.patientIcon}>
                      <User size={16} />
                    </div>
                    <h3 className={styles.patientName}>{patient.name}</h3>
                  </div>
                  <CaretRight
                    size={16}
                    className={`${styles.chevron} ${
                      selectedPatient === patient.id
                        ? styles.chevronRotated
                        : ""
                    }`}
                  />
                </div>

                <div className={styles.appointmentInfo}>
                  <div className={styles.appointmentDetail}>
                    <div className={styles.appointmentDate}>
                      <Calendar size={14} className={styles.appointmentIcon} />
                      <span>
                        {/* Next: {formatDate(patient.upcomingAppointment)} (
                        {getDaysUntil(patient.upcomingAppointment)}) */}
                        {/* Wednesday, 24 April 2025 */} No appointments
                      </span>
                    </div>
                    <div className={styles.appointmentDate}>
                      <Clock size={14} className={styles.appointmentIcon} />{" "}
                      <span>
                        {/* 10:00 am CST */}
                        No appointments
                      </span>
                    </div>
                  </div>

                  {/* Status Badge */}
                  <div>
                    {/* <StatusBadge status={patient.status} /> */}
                    <StatusBadge status="Confirmed" />
                  </div>
                </div>

                {/* Expanded details */}
                {selectedPatient === patient.id && (
                  <div className={styles.expandedDetails}>
                    <div className={styles.detailSection}>
                      <span className={styles.detailLabel}>Notes:</span>
                      {/* <p className={styles.detailContent}>{patient.notes}</p> */}
                      <p>
                        The boy have been having some improvment from the first
                        time we started theres a lot of improvment apparently
                      </p>
                    </div>
                    {/* <Link href="/dashboard/patient"> */}
                    <button
                      className={styles.viewProfileButton}
                      onClick={() =>
                        handleFullProfile(patient?.patient_id, patient?.name)
                      }
                    >
                      View Full Profile
                    </button>
                    {/* </Link> */}
                  </div>
                )}
              </div>
            </li>
            {/* ))} */}
          </ul>
        )}
      </div>
    </>
  );
}
