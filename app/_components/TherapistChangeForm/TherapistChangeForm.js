"use client";
import { useState } from "react";
// import styles from "./TherapistChangeForm.module.css";
// const styles1 = {
//   tag: {
//     display: "inline-flex",
//     alignItems: "center",
//     padding: "0.25rem 0.75rem",
//     borderRadius: "9999px",
//     fontSize: "0.75rem",
//     fontWeight: "500",
//     backgroundColor: "#ebf8ff",
//     color: "#3182ce",
//     marginRight: "0.5rem",
//     marginBottom: "0.5rem",
//   },
// };
// CSS Module as inline style object
const styles = {
  container: {
    // maxWidth: "600px",
    // margin: "0 auto",
    // padding: "2rem",
    // borderRadius: "12px",
    // boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
    // backgroundColor: "#fff",
    // fontFamily: "Inter, system-ui, sans-serif",
    maxWidth: "100vw",
    overflowYy: "auto",
    margin: "0 auto",
    height: "100vh",
    padding: "1rem",
    borderRadius: "12px",
    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
    backgroundColor: "#fff",
    /* font-family: Inter, system-ui, sans-serif; */
    overflowY: "auto",
  },
  header: {
    marginBottom: "1.5rem",
    borderBottom: "1px solid #f0f0f0",
    paddingBottom: "1rem",
  },
  title: {
    fontSize: "20px",
    fontWeight: "700",
    color: "#2d3748",
    margin: "0 0 0.5rem 0",
    marginBottom: "24px",
  },
  subtitle: {
    fontSize: "15px",
    color: "#718096",
    margin: "0",
  },
  formContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "1.5rem",
  },
  formGroup: {
    display: "flex",
    flexDirection: "column",
    color: "#4a5568",
    fontSize: "15px",
    gap: "0.5rem",
  },
  label: {
    fontSize: "15px",
    fontWeight: "500",
    // color: "#2d3748",
    color: "#4a5568",
  },
  input: {
    padding: "0.75rem",
    borderRadius: "6px",
    border: "1px solid #e2e8f0",
    fontSize: "15px",
    transition: "border-color 0.2s",
  },
  select: {
    padding: "0.75rem",
    borderRadius: "6px",
    border: "1px solid #e2e8f0",
    fontSize: "15px",
    backgroundColor: "#fff",
    transition: "border-color 0.2s",
  },
  textarea: {
    padding: "0.75rem",
    borderRadius: "6px",
    border: "1px solid #e2e8f0",
    fontSize: "15px",
    minHeight: "120px",
    resize: "vertical",
    transition: "border-color 0.2s",
  },
  checkbox: {
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
  },
  checkboxInput: {
    accentColor: "#4299e1",
    width: "16px",
    height: "16px",
  },
  buttonGroup: {
    display: "flex",
    gap: "1rem",
    marginTop: "1rem",
  },
  button: {
    padding: "0.75rem 1.5rem",
    borderRadius: "6px",
    fontSize: "15px",
    fontWeight: "500",
    cursor: "pointer",
    transition: "all 0.2s",
    border: "none",
  },
  primaryButton: {
    backgroundColor: "#008080",
    // backgroundColor: "#4299e1",
    color: "#fff",
  },
  secondaryButton: {
    backgroundColor: "#e2e8f0",
    color: "#4a5568",
  },
  reasonItem: {
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
    padding: "0.5rem 0",
  },
  tag: {
    display: "inline-flex",
    alignItems: "center",
    padding: "0.25rem 0.75rem",
    borderRadius: "9999px",
    fontSize: "12px",
    fontWeight: "500",
    backgroundColor: "#ebf8ff",
    color: "#3182ce",
    marginRight: "0.5rem",
    marginBottom: "0.5rem",
  },
  success: {
    padding: "1.5rem",
    backgroundColor: "#f0fff4",
    borderRadius: "8px",
    borderLeft: "4px solid #48bb78",
    marginBottom: "1.5rem",
  },
  successTitle: {
    color: "#2f855a",
    fontSize: "20px",
    fontWeight: "600",
    marginBottom: "0.5rem",
  },
  successText: {
    color: "#4a5568",
    fontSize: "15px",
  },
};
export default function TherapistChangeForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    currentTherapist: "Dr. Sarah Johnson",
    preferredGender: "",
    specialization: [],
    preferredAge: "",
    schedulingPreference: "",
    primaryReason: "",
    otherReasons: [],
    additionalNotes: "",
    urgentChange: false,
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const specializationOptions = [
    "Anxiety",
    "Depression",
    "Trauma",
    "Addiction",
    "Relationships",
    "Family Therapy",
    "CBT",
    "Mindfulness",
    "EMDR",
    "Art Therapy",
    "Grief Counseling",
  ];

  const reasons = [
    "Scheduling conflicts",
    "Communication style mismatch",
    "Seeking different approach/methodology",
    "Need specialist in specific area",
    "Moving locations",
    "Insurance/payment issues",
    "Personal preference",
  ];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      setFormData({ ...formData, [name]: checked });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSpecializationChange = (specialization) => {
    setFormData((prev) => {
      if (prev.specialization.includes(specialization)) {
        return {
          ...prev,
          specialization: prev.specialization.filter(
            (s) => s !== specialization
          ),
        };
      } else {
        return {
          ...prev,
          specialization: [...prev.specialization, specialization],
        };
      }
    });
  };

  const handleReasonChange = (reason) => {
    setFormData((prev) => {
      if (prev.otherReasons.includes(reason)) {
        return {
          ...prev,
          otherReasons: prev.otherReasons.filter((r) => r !== reason),
        };
      } else {
        return {
          ...prev,
          otherReasons: [...prev.otherReasons, reason],
        };
      }
    });
  };

  const handleSubmit = (e) => {
    if (e) {
      e.preventDefault();
    }
    // In a real application, you would submit the form data to your backend here
    setIsSubmitted(true);
  };

  return (
    <div style={styles.container}>
      {isSubmitted ? (
        <div>
          <div style={styles.success}>
            <div style={styles.successTitle}>
              Request Submitted Successfully
            </div>
            <div style={styles.successText}>
              Your therapist change request has been received. Our team will
              review your preferences and match you with a suitable therapist
              within 2-3 business days.
            </div>
          </div>

          <h2 style={styles.title}>Request Summary</h2>
          <div style={styles.formGroup}>
            <p>
              <strong>Current Therapist:</strong> {formData.currentTherapist}
            </p>
            <p>
              <strong>Primary Reason for Change:</strong>{" "}
              {formData.primaryReason}
            </p>
            {formData.otherReasons.length > 0 && (
              <p>
                <strong>Additional Factors:</strong>{" "}
                {formData.otherReasons.join(", ")}
              </p>
            )}
            {formData.specialization.length > 0 && (
              <p>
                <strong>Preferred Specializations:</strong>{" "}
                {formData.specialization.join(", ")}
              </p>
            )}
            {formData.urgentChange && (
              <p>
                <strong>Urgent Change Requested</strong>
              </p>
            )}
          </div>

          <div style={styles.buttonGroup}>
            <button
              style={{ ...styles.button, ...styles.secondaryButton }}
              onClick={() => {
                setFormData({
                  currentTherapist: "Dr. Sarah Johnson",
                  preferredGender: "",
                  specialization: [],
                  preferredAge: "",
                  schedulingPreference: "",
                  primaryReason: "",
                  otherReasons: [],
                  additionalNotes: "",
                  urgentChange: false,
                });
                setIsSubmitted(false);
                setCurrentStep(1);
              }}
            >
              Submit Another Request
            </button>
          </div>
        </div>
      ) : (
        <>
          <div style={styles.header}>
            <h1 style={styles.title}>Therapist Change Request</h1>
            <p style={styles.subtitle}>
              Help us find the right match for your therapeutic journey
            </p>
          </div>

          <div style={styles.formContainer}>
            {currentStep === 1 && (
              <>
                <div style={styles.formGroup}>
                  <label style={styles.label}>Current Therapist</label>
                  <input
                    type="text"
                    name="currentTherapist"
                    value={formData.currentTherapist}
                    onChange={handleChange}
                    style={styles.input}
                    disabled
                  />
                </div>

                <div style={styles.formGroup}>
                  <label style={styles.label}>Primary Reason for Change</label>
                  <select
                    name="primaryReason"
                    value={formData.primaryReason}
                    onChange={handleChange}
                    style={styles.select}
                  >
                    <option value="">Select primary reason</option>
                    {reasons.map((reason) => (
                      <option key={reason} value={reason}>
                        {reason}
                      </option>
                    ))}
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div style={styles.formGroup}>
                  <label style={styles.label}>
                    Additional Factors (Optional)
                  </label>
                  {reasons.map((reason) => (
                    <div key={reason} style={styles.reasonItem}>
                      <input
                        type="checkbox"
                        id={reason}
                        checked={formData.otherReasons.includes(reason)}
                        onChange={() => handleReasonChange(reason)}
                        style={styles.checkboxInput}
                      />
                      <label htmlFor={reason}>{reason}</label>
                    </div>
                  ))}
                </div>

                <div style={styles.formGroup}>
                  <div style={styles.checkbox}>
                    <input
                      type="checkbox"
                      name="urgentChange"
                      checked={formData.urgentChange}
                      onChange={handleChange}
                      style={styles.checkboxInput}
                    />
                    <span>Request urgent change (within 48 hours)</span>
                  </div>
                </div>

                <div style={styles.buttonGroup}>
                  <button
                    type="button"
                    style={{ ...styles.button, ...styles.primaryButton }}
                    onClick={() => setCurrentStep(2)}
                  >
                    Continue
                  </button>
                </div>
              </>
            )}

            {currentStep === 2 && (
              <>
                <div style={styles.formGroup}>
                  <label style={styles.label}>
                    Preferred Therapist Gender (Optional)
                  </label>
                  <select
                    name="preferredGender"
                    value={formData.preferredGender}
                    onChange={handleChange}
                    style={styles.select}
                  >
                    <option value="">No preference</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="nonbinary">Non-binary</option>
                  </select>
                </div>

                <div style={styles.formGroup}>
                  <label style={styles.label}>
                    Preferred Age Range (Optional)
                  </label>
                  <select
                    name="preferredAge"
                    value={formData.preferredAge}
                    onChange={handleChange}
                    style={styles.select}
                  >
                    <option value="">No preference</option>
                    <option value="20-35">20-35 years</option>
                    <option value="36-50">36-50 years</option>
                    <option value="51+">51+ years</option>
                  </select>
                </div>

                <div style={styles.formGroup}>
                  <label style={styles.label}>
                    Preferred Scheduling (Optional)
                  </label>
                  <select
                    name="schedulingPreference"
                    value={formData.schedulingPreference}
                    onChange={handleChange}
                    style={styles.select}
                  >
                    <option value="">No preference</option>
                    <option value="mornings">
                      Morning sessions (8am-12pm)
                    </option>
                    <option value="afternoons">
                      Afternoon sessions (12pm-5pm)
                    </option>
                    <option value="evenings">Evening sessions (5pm-9pm)</option>
                    <option value="weekends">Weekend availability</option>
                  </select>
                </div>

                <div style={styles.formGroup}>
                  <label style={styles.label}>
                    Preferred Specializations (Optional)
                  </label>
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: "0.5rem",
                      marginTop: "0.5rem",
                    }}
                  >
                    {specializationOptions.map((specialization) => (
                      <div
                        key={specialization}
                        style={{
                          ...styles.tag,
                          backgroundColor: formData.specialization.includes(
                            specialization
                          )
                            ? "#bee3f8"
                            : "#f7fafc",
                          color: formData.specialization.includes(
                            specialization
                          )
                            ? "#2b6cb0"
                            : "#718096",
                          cursor: "pointer",
                        }}
                        onClick={() =>
                          handleSpecializationChange(specialization)
                        }
                      >
                        {specialization}
                      </div>
                    ))}
                  </div>
                </div>

                <div style={styles.formGroup}>
                  <label style={styles.label}>
                    Additional Notes or Requirements (Optional)
                  </label>
                  <textarea
                    name="additionalNotes"
                    value={formData.additionalNotes}
                    onChange={handleChange}
                    style={styles.textarea}
                    placeholder="Share any additional information that might help us find the right therapist for you..."
                  ></textarea>
                </div>

                <div style={styles.buttonGroup}>
                  <button
                    type="button"
                    style={{ ...styles.button, ...styles.secondaryButton }}
                    onClick={() => setCurrentStep(1)}
                  >
                    Back
                  </button>
                  <button
                    type="button"
                    style={{ ...styles.button, ...styles.primaryButton }}
                    onClick={handleSubmit}
                  >
                    Submit Request
                  </button>
                </div>
              </>
            )}
          </div>
        </>
      )}
    </div>
  );
}
