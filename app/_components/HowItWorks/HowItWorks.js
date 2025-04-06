import Button from "../Button/Button";
import styles from "./HowItWorks.module.css";
import Evaluation from "@/public/Evaluation.svg";
import Message from "@/public/Message Chat.svg";
import User from "@/public/user-transfer.svg";
import Image from "next/image";
import WaveHaikeiBottom from "@/public/wave-haikei(7).svg";

const how = [
  {
    image: Evaluation,
    name: "Take a Quick Assessment",
    desc: "Answer a few questions to help us understand your needs and preferences",
  },
  {
    image: User,
    name: "Get Matched with a Therapist",
    desc: "We’ll pair you with a licensed therapist who’s the best fit for you",
  },
  {
    image: Message,
    name: "Connect via Chat, Video or Call sessions",
    desc: "Choose how you would like to connect through chat, video sessions or phone calls.",
  },
];

export default function HowItWorks() {
  return (
    <section className={styles.howItWorksContainer}>
      <div className={styles.custom}>
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            opacity=".25"
            className={styles.shape}
          ></path>
          <path
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
            opacity=".5"
            className={styles.shape}
          ></path>
          <path
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
            className={styles.shape}
          ></path>
        </svg>
      </div>
      <div className={styles.howHead}>
        <div className={styles.howright}>
          <h1 className={styles.howHOne}>How it works</h1>
          <h4 className={styles.howHFour}>
            Getting the support you need is simple. Follow these easy steps to
            start your mental wellness journey today
          </h4>
        </div>
        <div className={styles.howLeft}>
          {/* remember to change to get started  */}
          <Button type="join">Get started</Button>
        </div>
      </div>
      {/* But */}
      <div className={styles.headBotCon}>
        {how.map((item, index) => (
          <div
            key={item.name}
            className={`${styles.headBot} ${
              index == 0
                ? styles.colorOne
                : index == 1
                ? styles.colorTwo
                : styles.colorThree
            }`}
          >
            <Image
              src={item.image}
              alt="how betterspace works"
              width={100}
              height={100}
              //   style={{ marginBottom: "24px" }}
              className={index === 1 ? styles.IndexOne : styles.IndexNone}
            />
            <h2 className={styles.headBotHOne}>{item.name}</h2>
            <p className={styles.headBotPara}>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
