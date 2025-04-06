import Image from "next/image";
import styles from "./Steps.module.css";
import Frame from "@/public/Frame.svg";
import { Fragment } from "react";

function Steps() {
  const stepsWords = [
    {
      head: "Sign Up",
      body: "Download the Betterspace app from the App Store or Google Play.",
    },
    {
      head: "Tell us about yourself",
      body: "Answer a few questions to help us understand your needs.",
    },
    {
      head: "Therapist Match",
      body: "We connect you with therapists suited to your needs.",
    },
    {
      head: "Start Your Therapy Journey",
      body: "Once a therapist is available, we'll connect you and help schedule your first session.",
    },
  ];

  return (
    <section className={styles.styledSteps}>
      <div className={styles.stepsContainer}>
        <span className={styles.textBold}>
          Making the first step in your
          <br /> mental health journey easier.
        </span>

        <div className={styles.stepsProper}>
          {Array.from({ length: 4 }, (_, i) => (
            <Fragment key={i}>
              <div className={styles.step}>
                <div className={styles.numberContainer}>
                  <div className={styles.roundedImg}>
                    <span className={styles.stepNumber}>{i + 1}</span>
                    <Image width={36} height={36} src={Frame} alt="frame" />
                  </div>
                </div>
                <div className={styles.textContainer}>
                  <span className={styles.stepBoldText}>
                    {stepsWords[i].head}
                  </span>
                  <span className={styles.stepLightText}>
                    {stepsWords[i].body}
                  </span>
                </div>
              </div>
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Steps;
