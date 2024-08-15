"use client";
import Image from "next/image";
import styles from "./Faq.module.css";
import Arrow from "@/public/Icon.svg";
import Vector from "@/public/Vector.svg";
import { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { toggleQuestion } from "../store/faqSlice";

function Faq() {
  const faq = [
    {
      question: "What is Betterspace?",
      answer:
        "Better Space is a platform that connects you with licensed therapists who can provide mental health support. We understand the importance of finding the right fit, so we offer a network of diverse and experienced professionals.",
    },
    {
      question: "Who is Betterspace for?",
      answer:
        "Betterspace is for anyone seeking mental health support. Whether you're dealing with stress, anxiety, depression, or any other challenge, we can help you find a therapist who specializes in your needs.",
    },
    {
      question: "Can I choose my own therapist?",
      answer:
        "While we don't offer direct therapist selection, we work hard to match you with a therapist who aligns with your preferences and areas of concern. ",
    },
  ];
  // const dispatch = useDispatch();
  // const isQuestion = useSelector((state) => state.faqQuestion.isQuestion);
  // console.log(isQuestion);
  // const handleQuestionClick = () => {
  //   dispatch(toggleQuestion());
  // };
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
    console.log(openIndex);
  };

  return (
    <section className={styles.styledFaq}>
      <div className={styles.faqContainer}>
        <span className={styles.boldText}>
          Frequently asked,{" "}
          <span className={styles.spanRound}>
            questions
            <Image src={Vector} alt="Vector" />
          </span>
        </span>

        <div className={styles.mainFaq}>
          {faq.map((item, index) => (
            <div key={item.question} className={styles.QuesAnsContainer}>
              <div
                className={styles.individualFaq}
                key={index}
                onClick={() => handleToggle(index)}
              >
                <span className={styles.textFaq}>{item.question}</span>
                <Image src={Arrow} alt="arrow" />
              </div>
              {openIndex === index && (
                <span className={styles.answerFaq}>{item.answer}</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// export function getServerSideProps() {

//   return {
//     props: {
//       faq,
//     },
//   };
// }

export default Faq;
