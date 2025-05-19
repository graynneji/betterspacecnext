"use client";
import { useState } from "react";
import styles from "./CallHistory.module.css";

export default function CallHistory({ onSelectCall }) {
  const [selectedCallId, setSelectedCallId] = useState(1); // Pre-select the first call
  const [filterStatus, setFilterStatus] = useState("all");

  // Sample call history data
  const calls = [
    {
      id: 1,
      date: "2025-05-06",
      time: "14:00",
      duration: "50 min",
      status: "completed",
      therapist: "Dr. Sarah Johnson",
      patient: "Alex Smith",
      notes: "Anxiety management techniques",
      unread: false,
    },
    {
      id: 2,
      date: "2025-04-29",
      time: "14:00",
      duration: "50 min",
      status: "completed",
      therapist: "Dr. Sarah Johnson",
      patient: "Alex Smith",
      notes: "Work-related stress discussion",
      unread: false,
    },
    {
      id: 3,
      date: "2025-04-22",
      time: "14:00",
      duration: "50 min",
      status: "completed",
      therapist: "Dr. Sarah Johnson",
      patient: "Alex Smith",
      notes: "Initial assessment session",
      unread: false,
    },
    {
      id: 4,
      date: "2025-05-13",
      time: "14:00",
      duration: "50 min",
      status: "upcoming",
      therapist: "Dr. Sarah Johnson",
      patient: "Alex Smith",
      notes: "Follow-up session",
      unread: true,
    },
    {
      id: 5,
      date: "2025-05-20",
      time: "15:30",
      duration: "50 min",
      status: "upcoming",
      therapist: "Dr. Sarah Johnson",
      patient: "Alex Smith",
      notes: "Progress review",
      unread: true,
    },
    {
      id: 6,
      date: "2025-04-15",
      time: "14:00",
      duration: "50 min",
      status: "missed",
      therapist: "Dr. Sarah Johnson",
      patient: "Alex Smith",
      notes: "Rescheduled to April 22",
      unread: false,
    },
  ];

  // Sort calls by date (most recent first)
  const sortedCalls = [...calls].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  // Filter calls based on selected status
  const filteredCalls =
    filterStatus === "all"
      ? sortedCalls
      : sortedCalls.filter((call) => call.status === filterStatus);

  // Handle call selection
  const handleSelectCall = (call) => {
    setSelectedCallId(call.id);
    onSelectCall && onSelectCall(call);
  };

  // Format date for display
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);

    if (date.toDateString() === today.toDateString()) {
      return "Today";
    } else if (date.toDateString() === yesterday.toDateString()) {
      return "Yesterday";
    } else {
      const options = { month: "short", day: "numeric" };
      if (date.getFullYear() !== today.getFullYear()) {
        options.year = "numeric";
      }
      return date.toLocaleDateString("en-US", options);
    }
  };

  // Group calls by date
  const groupCallsByDate = (calls) => {
    const grouped = {};
    calls.forEach((call) => {
      const dateKey = formatDate(call.date);
      if (!grouped[dateKey]) {
        grouped[dateKey] = [];
      }
      grouped[dateKey].push(call);
    });
    return grouped;
  };

  const groupedCalls = groupCallsByDate(filteredCalls);

  // Get status icon based on call status
  const getStatusIcon = (status) => {
    switch (status) {
      case "completed":
        return "✓";
      case "upcoming":
        return "•";
      case "missed":
        return "✕";
      default:
        return "";
    }
  };

  return (
    <div className={styles.sidebarContainer}>
      <div className={styles.sidebarHeader}>
        <div className={styles.titleRow}>
          <h2>Sessions</h2>
          <button className={styles.newButton}>+</button>
        </div>
        <div className={styles.filterRow}>
          <button
            className={`${styles.filterButton} ${
              filterStatus === "all" ? styles.active : ""
            }`}
            onClick={() => setFilterStatus("all")}
          >
            All
          </button>
          <button
            className={`${styles.filterButton} ${
              filterStatus === "upcoming" ? styles.active : ""
            }`}
            onClick={() => setFilterStatus("upcoming")}
          >
            Upcoming
          </button>
          <button
            className={`${styles.filterButton} ${
              filterStatus === "completed" ? styles.active : ""
            }`}
            onClick={() => setFilterStatus("completed")}
          >
            Past
          </button>
          <button
            className={`${styles.filterButton} ${
              filterStatus === "missed" ? styles.active : ""
            }`}
            onClick={() => setFilterStatus("missed")}
          >
            Missed
          </button>
        </div>
      </div>

      <div className={styles.callListContainer}>
        {Object.keys(groupedCalls).length > 0 ? (
          Object.entries(groupedCalls).map(([dateGroup, calls]) => (
            <div key={dateGroup} className={styles.dateGroup}>
              <div className={styles.dateLabel}>{dateGroup}</div>
              <ul className={styles.callList}>
                {calls.map((call) => (
                  <li
                    key={call.id}
                    className={`${styles.callItem} ${
                      selectedCallId === call.id ? styles.selected : ""
                    }`}
                    onClick={() => handleSelectCall(call)}
                  >
                    <div className={styles.timeColumn}>
                      <span className={styles.time}>{call.time}</span>
                      <span className={styles.duration}>{call.duration}</span>
                    </div>
                    <div className={styles.infoColumn}>
                      <div className={styles.callHeader}>
                        <span className={styles.therapistName}>
                          {call.therapist.split(" ")[0]}{" "}
                          {call.therapist.split(" ")[1].charAt(0)}.
                        </span>
                        <span
                          className={`${styles.statusIndicator} ${
                            styles[call.status]
                          }`}
                        >
                          {getStatusIcon(call.status)}
                        </span>
                      </div>
                      <div className={styles.notesPreview}>
                        {call.notes}
                        {call.unread && (
                          <span className={styles.unreadBadge}></span>
                        )}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))
        ) : (
          <div className={styles.noResults}>
            <div className={styles.emptyState}>
              <div className={styles.emptyIcon}>📅</div>
              <p>No sessions found</p>
              <button className={styles.scheduleButton}>
                Schedule a Session
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
