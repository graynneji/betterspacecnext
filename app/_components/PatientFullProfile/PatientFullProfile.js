"use client";
import { useState } from "react";
import {
  Calendar,
  Clock,
  Plus,
  X,
  FileText,
} from "@phosphor-icons/react/dist/ssr";
import styles from "./PatientFullProfile.module.css";
import QuestionaireModal from "../QuestionaireModal/QuestionaireModal";
import { useSearchParams } from "next/navigation";

export default function PatientFullProfile() {
  // Sample patient data
  const [patient, setPatient] = useState({
    name: "Sarah Johnson",
    age: 32,
    appointment: {
      date: "May 5, 2025",
      time: "10:30 AM",
      type: "Regular Session",
    },
    notes: [
      {
        id: 1,
        text: "Experiencing work-related anxiety. Using breathing techniques discussed in previous sessions.",
        color: styles.noteAmber,
      },
      {
        id: 2,
        text: "Sleep has improved after establishing regular bedtime routine. Continue monitoring.",
        color: styles.noteBlue,
      },
      {
        id: 3,
        text: "Discussed family dynamics. Patient shows progress in setting boundaries.",
        color: styles.noteGreen,
      },
    ],
    intakeResponses: [
      {
        question: "What brings you to therapy at this time?",
        answer:
          "I've been experiencing increasing anxiety about work and having trouble sleeping. I feel overwhelmed by deadlines and expectations.",
      },
      {
        question: "Have you been in therapy before?",
        answer: "Yes, briefly about 3 years ago for 6 months.",
      },
      {
        question: "How would you rate your current stress level (1-10)?",
        answer: "8",
      },
      {
        question: "What are your goals for therapy?",
        answer:
          "I want to develop better coping mechanisms for stress and improve my work-life balance.",
      },
      {
        question: "Do you have any concerns about starting therapy?",
        answer:
          "I'm worried about opening up and being vulnerable with someone new.",
      },
    ],
  });

  // State for new note
  const [newNote, setNewNote] = useState("");
  const [formVisible, setFormVisible] = useState(false);
  const [questionnaireVisible, setQuestionnaireVisible] = useState(false);
  const searchParams = useSearchParams();
  const patientId = searchParams.get("id");
  const patientName = searchParams.get("name") || "";
  const filteredName = patientName.replace(/[^a-zA-Z0-9]/g, " ");
  console.log(patientId, patientName);
  // Note color classes
  const noteColors = [
    styles.noteAmber,
    styles.noteBlue,
    styles.noteGreen,
    styles.notePurple,
    styles.notePink,
  ];

  // Add new note
  const addNote = () => {
    if (newNote.trim() !== "") {
      const randomColor =
        noteColors[Math.floor(Math.random() * noteColors.length)];
      setPatient({
        ...patient,
        notes: [
          ...patient.notes,
          {
            id: patient.notes.length + 1,
            text: newNote,
            color: randomColor,
          },
        ],
      });
      setNewNote("");
      setFormVisible(false);
    }
  };

  // Delete note
  const deleteNote = (id) => {
    setPatient({
      ...patient,
      notes: patient.notes.filter((note) => note.id !== id),
    });
  };

  return (
    <div className={styles.container}>
      {/* Main Container */}
      <div className={styles.mainWrapper}>
        {/* Header with brand styling */}
        <div className={styles.header}>
          <h1 className={styles.headerTitle}>Patient Profile</h1>
          <button
            onClick={() => setQuestionnaireVisible(true)}
            className={styles.viewIntakeBtn}
          >
            <FileText size={18} className={styles.icon} />
            Questionaire
          </button>
        </div>

        {/* Profile Content */}
        <div className={styles.profileContent}>
          {/* Patient Basic Info */}
          <div className={styles.basicInfo}>
            <h2 className={styles.patientName}>{filteredName}</h2>
            <p className={styles.patientAge}>{patient.age} years old</p>
          </div>

          {/* Upcoming Appointment */}
          <div className={styles.appointmentSection}>
            <h3 className={styles.sectionTitle}>Upcoming Appointment</h3>
            <div className={styles.appointmentCard}>
              <div className={styles.appointmentIcon}>
                <Calendar size={20} />
              </div>
              <div className={styles.appointmentDetails}>
                <div className={styles.appointmentType}>
                  {patient.appointment.type}
                </div>
                <div className={styles.appointmentDate}>
                  {patient.appointment.date}
                </div>
              </div>
              <div className={styles.appointmentTime}>
                <Clock size={16} className={styles.timeIcon} />
                <span>{patient.appointment.time}</span>
              </div>
            </div>
          </div>

          {/* Notes Section */}
          <div className={styles.notesSection}>
            <div className={styles.notesHeader}>
              <h3 className={styles.sectionTitle}>Patient Notes</h3>
              <button
                onClick={() => setFormVisible(true)}
                className={styles.addNoteBtn}
              >
                <Plus size={18} className={styles.icon} />
                Add Note
              </button>
            </div>

            {/* Notes Grid */}
            <div className={styles.notesGrid}>
              {patient.notes.map((note) => (
                <div
                  key={note.id}
                  className={`${styles.noteCard} ${note.color}`}
                >
                  <button
                    onClick={() => deleteNote(note.id)}
                    className={styles.deleteNoteBtn}
                  >
                    <X size={16} />
                  </button>
                  <p className={styles.noteText}>{note.text}</p>
                </div>
              ))}
            </div>

            {/* Add Note Form */}
            {formVisible && (
              <div className={styles.modalOverlay}>
                <div className={styles.modalContent}>
                  <h3 className={styles.modalTitle}>Add New Note</h3>
                  <textarea
                    value={newNote}
                    onChange={(e) => setNewNote(e.target.value)}
                    placeholder="Enter your note here..."
                    className={styles.noteTextarea}
                  />
                  <div className={styles.modalActions}>
                    <button
                      onClick={() => setFormVisible(false)}
                      className={styles.cancelBtn}
                    >
                      Cancel
                    </button>
                    <button onClick={addNote} className={styles.saveBtn}>
                      Save Note
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Questionaire Modal */}
          <QuestionaireModal
            setQuestionnaireVisible={setQuestionnaireVisible}
            questionnaireVisible={questionnaireVisible}
            patient={patient}
          />
        </div>
      </div>
    </div>
  );
}
