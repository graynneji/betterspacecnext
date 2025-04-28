"use client";
import React, { useState } from "react";
import {
  MagnifyingGlass,
  ChatText,
  Users,
  Calendar,
  Wallet,
  Clock,
  Bookmark,
  GearSix,
  CaretRight,
  Plus,
} from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import styles from "./TherapistSidebar.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useRealTime } from "@/app/hooks/useRealTime";
import { useMessPrev } from "@/app/hooks/useMessPrev";
import { formatTime } from "@/app/utils/formatTime";
import { getPatientRecvId } from "@/app/store/getPatientRecvIdSlice";

// Navigation tabs data
const messNav = [
  { menuName: "Chats", MenuIcon: ChatText },
  { menuName: "Patients", MenuIcon: Users },
  { menuName: "Schedule", MenuIcon: Calendar },
];

// Sample patient data - in a real app, this would come from an API
const patientsData = [
  {
    id: "p1",
    name: "Sarah Johnson",
    lastMessage: "Thank you for the session yesterday, it was very helpful.",
    time: "10:24 AM",
    unread: 2,
    status: "online",
  },
  {
    id: "p2",
    name: "Michael Reynolds",
    lastMessage: "Can we reschedule our appointment for next week?",
    time: "Yesterday",
    unread: 0,
    status: "offline",
  },
  {
    id: "p3",
    name: "Emma Thompson",
    lastMessage: "I've been practicing the techniques you suggested.",
    time: "Yesterday",
    unread: 3,
    status: "online",
  },
  {
    id: "p4",
    name: "David Wilson",
    lastMessage: "Looking forward to our next session on Friday.",
    time: "Monday",
    unread: 0,
    status: "offline",
  },
];

// Patient card component
const PatientCard = ({ patient, collectedMsg, onHandleClick }) => {
  const therapistPatients = useSelector(
    (state) => state.getTherapistPatients.therapistPatients
  );

  return (
    // <Link href={`/dashboard/messages/${patient.id}`}>
    <div
      className={styles.patientCard}
      onClick={() =>
        onHandleClick({
          patientId: patient?.patient_id,
          patientName: patient?.name,
        })
      }
    >
      <>
        <div className={styles.patientAvatar}>
          <div className={styles.avatarInitial}>{patient.name.charAt(0)}</div>
          <div
            className={`${styles.statusDot} ${styles[patient.status]}`}
          ></div>
        </div>
        <div className={styles.patientInfo}>
          <div className={styles.patientHeader}>
            <h4 className={styles.patientName}>{patient.name}</h4>
            <span className={styles.messageTime}>
              {/* {patient.time || "1:00am"} */}
              {formatTime(collectedMsg?.created_at)}
            </span>
          </div>

          <p className={styles.lastMessage}>
            {/* {patient.lastMessage || "Hello Gray"} */}
            {collectedMsg?.message}
          </p>

          <div className={styles.messageFooter}>
            {patient.unread > 0 && (
              <span className={styles.unreadBadge}>{patient.unread}</span>
            )}
          </div>
        </div>
      </>
    </div>
    // </Link>
  );
};

const TherapistSidebar = ({ users }) => {
  const [activeTab, setActiveTab] = useState(0);
  const [activeFilter, setActiveFilter] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();
  const userId = users[0]?.user_id;
  console.log("hhdjdfkjd", users);
  // Filter patients based on search term
  //   const filteredPatients = patientsData.filter(
  //     (patient) =>
  //       patient.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
  //       patient.lastMessage.toLowerCase().includes(searchTerm.toLowerCase())
  //   );
  const conversations = useMessPrev(userId);
  const conversationEntries = Object.entries(conversations);
  console.log(conversationEntries);
  const therapistPatients = useSelector(
    (state) => state.getTherapistPatients.therapistPatients
  );
  const filteredPatients = therapistPatients.filter(
    (patient) =>
      patient.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      patient.lastMessage.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Handle filter change
  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
    // Additional filtering logic would go here
  };

  const handleSelectPatient = (patientId) => {
    dispatch(getPatientRecvId(patientId));
  };

  return (
    <>
      <div className={styles.patientListContainer}>
        <h3 className={styles.chatHeader}>Messages</h3>

        {/* Modern search input */}
        <div className={styles.searchContainer}>
          <MagnifyingGlass
            size={18}
            weight="bold"
            className={styles.searchIcon}
          />
          <input
            type="text"
            placeholder="Search conversations..."
            className={styles.searchInput}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Navigation tabs with animated indicator */}
        <div className={styles.navigationTabs}>
          {messNav.map((item, index) => (
            <div
              className={`${styles.navTab} ${
                index === activeTab ? styles.activeTab : ""
              }`}
              key={item.menuName}
              onClick={() => setActiveTab(index)}
            >
              <item.MenuIcon
                size={20}
                weight={index === activeTab ? "fill" : "bold"}
              />
              <span>{item.menuName}</span>
              {index === activeTab && (
                <div className={styles.activeIndicator}></div>
              )}
            </div>
          ))}
        </div>

        {/* Filter chips */}
        <div className={styles.filterChips}>
          {["All", "Unread", "Recent"].map((filter) => (
            <div
              key={filter}
              className={`${styles.chip} ${
                activeFilter === filter ? styles.activeChip : ""
              }`}
              onClick={() => handleFilterChange(filter)}
            >
              <span>{filter}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Patient conversations with visual indicators */}
      <div className={styles.patientsList}>
        <div className={styles.patientsListHeader}>
          <h4
            style={{
              letterSpacing: "-0.01em",
            }}
          >
            Recent Conversations
          </h4>
          <span className={styles.viewAll}>
            View all <CaretRight size={14} />
          </span>
        </div>

        {/* Patient cards */}
        <div className={styles.patientCardsContainer}>
          {filteredPatients.length > 0 ? (
            filteredPatients.map((patient, idx) => {
              //   const msg = conversationEntries[idx];
              const msg = conversationEntries[idx] || []; // fallback empty array

              const collectedMsg = msg[1] || null; // fallback null if msg[1] missing
              console.log("meeeesss", msg[1]);
              //   const collectedMsg = msg[1];
              return (
                <PatientCard
                  key={patient.id}
                  patient={patient}
                  collectedMsg={collectedMsg}
                  onHandleClick={handleSelectPatient}
                />
              );
            })
          ) : (
            <div className={styles.noResults}>
              <p>No conversations found</p>
            </div>
          )}
        </div>

        {/* Add new chat button */}
        <div className={styles.addNewChat}>
          <div className={styles.addIcon}>
            <Plus size={20} weight="bold" />
          </div>
          <span>Start New Conversation</span>
        </div>

        {/* Wallet shortcut */}
        <Link href="/dashboard/wallet">
          <div className={styles.walletShortcut}>
            <div className={styles.walletIcon}>
              <Wallet size={20} weight="bold" />
            </div>
            <div className={styles.walletInfo}>
              <span className={styles.walletLabel}>Your Wallet</span>
              <span className={styles.walletBalance}>$1,450.00</span>
            </div>
            <CaretRight size={16} className={styles.walletArrow} />
          </div>
        </Link>
      </div>

      {/* Quick actions at the bottom */}
      <div className={styles.profileDown}>
        <div className={styles.quickActions}>
          <Link href="/dashboard/history">
            <div className={styles.actionItem}>
              <Clock size={20} weight="bold" />
              <span>History</span>
            </div>
          </Link>
          <Link href="/dashboard/saved">
            <div className={styles.actionItem}>
              <Bookmark size={20} weight="bold" />
              <span>Saved</span>
            </div>
          </Link>
          <Link href="/dashboard/settings">
            <div className={styles.actionItem}>
              <GearSix size={20} weight="bold" />
              <span>Settings</span>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default TherapistSidebar;
