import React from "react";
import styles from "./TherapyApplication.module.css";
import styless from "./BusinessHeader.module.css";
import stylesss from "./BusinessOffer.module.css";
import stylessss from "./JoinTherapy.module.css";
import Button from "./Button.js";

const TherapyApplication = () => {
  return (
    <section className={styles.Section}>
      <div className={styless.text}>
        <div className={stylessss.TextContainer}>
          <h1 className={stylesss.Heading}>What we are looking for</h1>
        </div>
        <div className={styles.Content}>
          <ul className={styles.List}>
            <li className={styles.ListItem}>
              Active and valid licensing as a therapist, counselor,
              psychologist, or clinical social worker
            </li>
            <li className={styles.ListItem}>
              At least 2 years of post-graduate clinical experience
            </li>
            <li className={styles.ListItem}>
              Specialties in areas such as CBT, DBT, couples counseling,
              trauma/PTSD, etc.
            </li>
            <li className={styles.ListItem}>
              Excellent communication and empathetic listening skills
            </li>
            <li className={styles.ListItem}>
              The ability to build trusting, culturally-sensitive therapeutic
              relationships
            </li>
            <li className={styles.ListItem}>
              A passion for helping others achieve emotional wellness and
              personal growth
            </li>
          </ul>
          <Button type="start">Start Application</Button>
        </div>
      </div>
    </section>
  );
};
export default TherapyApplication;
