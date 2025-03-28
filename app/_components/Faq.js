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
