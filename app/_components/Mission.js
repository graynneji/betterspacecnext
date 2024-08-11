import styles from "./Mission.module.css";
import Splash from "@/public/About/Elements-geometric-shape-flower-daisy-nature.svg";
import MissionImage from "@/public/About/About/IMG.svg";
import Image from "next/image";

const Mission = () => {
  return (
    <section className={styles.missionSection}>
      <div className={styles.missionContainer}>
        <picture className={styles.missionContent}>
          <span className={styles.icoCon}>
            <Image
              style={{ width: "100%", height: "auto" }}
              src={Splash}
              alt="Splash Icon"
              className={styles.missionSplashIcon}
            />
          </span>
          <Image
            style={{ width: "100%", height: "auto" }}
            src={MissionImage}
            alt="Mission Image"
            className={styles.missionImages}
          />
        </picture>
        <div className={styles.missionHeading}>
          <h1 className={styles.missionHeadingText}>Our mission</h1>
          <ul className={styles.missionHeadingList}>
            <li className={styles.missionHeadingListItem}>
              To make high-quality mental health resources accessible and
              affordable for everyone.
            </li>
            <li className={styles.missionHeadingListItem}>
              To provide a safe and supportive space for individuals to learn,
              connect, and thrive.
            </li>
            <li className={styles.missionHeadingListItem}>
              To destigmatize mental health conversations and empower users to
              prioritize their well-being.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Mission;
