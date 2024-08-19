import Button from "./Button";
import styles from "./HowItWorks.module.css";
import Evaluation from "@/public/Evaluation.svg";
import Message from "@/public/Message Chat.svg";
import User from "@/public/user-transfer.svg";
import Image from "next/image";

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
      <div className={styles.howHead}>
        <div className={styles.howright}>
          <h1 className={styles.howHOne}>How it works</h1>
          <h4 className={styles.howHFour}>
            Getting the support you need is simple. Follow these easy steps to
            start your mental wellness journey today
          </h4>
        </div>
        <div className={styles.howLeft}>
          <Button type="join">Get Started</Button>
        </div>
      </div>
      {/* But */}
      <div className={styles.headBotCon}>
        {how.map((item, index) => (
          <div key={item.name} className={styles.headBot}>
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
