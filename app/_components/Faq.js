import Image from "next/image";
import styles from "./Faq.module.css";
import Arrow from "@/public/Icon.svg";
import Vector from "@/public/Vector.svg";

function Faq() {
  const faq = [
    "What is Betterspace?",
    "Who is Betterspace for?",
    "Can I choose my own therapist?",
  ];

  return (
    <section className={styles.styledFaq}>
      <div className={styles.faqContainer}>
        <span className={styles.boldText}>
          Your questions,{" "}
          <span className={styles.spanRound}>
            answered.
            <Image src={Vector} alt="Vector" />
          </span>
        </span>

        <div className={styles.mainFaq}>
          {faq.map((item, i) => (
            <div className={styles.individualFaq} key={i}>
              <span className={styles.textFaq}>{item}</span>
              <Image src={Arrow} alt="arrow" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Faq;
