"use client";
import Image from "next/image";
import styles from "./Faq.module.css";
import Arrow from "@/public/Icon.svg";
import Vector from "@/public/Vector.svg";
import { useState } from "react";
import { MdKeyboardArrowUp } from "react-icons/md";
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
      question: "How does Betterspace work?",
      answer:
        "You start by signing up and completing a brief assessment to help us understand your needs. Based on your preferences and the issues you'd like to address, we'll match you with a therapist. You can then schedule sessions, communicate through chat, or have video and audio calls with your therapist.",
    },
    {
      question: "Who are the therapists on Betterspace?",
      answer:
        "All therapists on Betterspace are licensed professionals with credentials verified by our team. They come from various backgrounds and specialties to ensure you can find the right fit for your mental health needs.",
    },
    {
      question: "Can I choose my own therapist?",
      answer:
        "While we don't offer direct therapist selection, we work hard to match you with a therapist who aligns with your preferences and areas of concern. ",
    },
    {
      question: "Is Betterspace confidential?",
      answer:
        "Absolutely. We prioritize your privacy and confidentiality. All communications between you and your therapist are encrypted, and we adhere to strict privacy standards to protect your personal information.",
    },
    {
      // question: "What types of issues can Betterspace help with?",
      question: "What issues can Betterspace help with?",
      answer:
        "Betterspace can assist with a wide range of mental health concerns, including anxiety, depression, stress, relationship issues, trauma, grief, and more. Our therapists are trained to support you through various challenges.",
    },
    {
      question: "Can I switch therapists if I’m not satisfied?",
      answer:
        "Yes, if you feel that your current therapist isn’t the right fit, you can easily switch to another therapist at any time through your account settings.",
    },
    {
      question: "How do I get started with Betterspace?",
      answer:
        "Getting started is easy! Simply sign up on our website or app, complete the initial assessment, and you’ll be matched with a therapist who suits your needs. From there, you can start your journey to better mental health.",
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
                {openIndex === index ? (
                  <MdKeyboardArrowUp className={styles.arrowUp} />
                ) : (
                  <Image src={Arrow} alt="arrow" />
                )}
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
