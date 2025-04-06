import styles from "./Questionaire.module.css";
// import QuestionaireCard from "./QuestionaireCard";
import { createQuestions, getQuestions } from "../../_lib/data-services";
import Button from "../Button/Button";
import { GrCircleInformation } from "react-icons/gr";
import QuestionCard from "../QuestionCard/QuestionCard";
import { Provider } from "react-redux";
import store from "../../store/store";

export default function Questionaire() {
  // const data = await getQuestions();

  return (
    <section className={styles.questionaireCon}>
      {/* <ProgressBar /> */}
      {/* <QuestionaireCard data={data} /> */}

      <QuestionCard />
    </section>
  );
}
