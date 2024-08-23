import styles from "./Questionaire.module.css";
import QuestionaireCard from "./QuestionaireCard";
import { getQuestions } from "../_lib/data-services";
import Button from "./Button";
import { GrCircleInformation } from "react-icons/gr";

export default async function Questionaire() {
  const data = await getQuestions();

  return (
    <section className={styles.questionaireCon}>
      {/* <ProgressBar /> */}
      <QuestionaireCard data={data} />
    </section>
  );
}
