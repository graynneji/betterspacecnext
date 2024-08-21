import Button from "./Button";
import styles from "./Questionaire.module.css";
import { GrCircleInformation } from "react-icons/gr";
export default function Questionaire() {
  return (
    <section className={styles.questionaireCon}>
      <div className={styles.questionTop}>
        <h1 className={styles.questionHOne}>
          Lets match you with the Right Therapist
        </h1>
        {/* <h1 className={styles.questionHOne}>
        Connect with the Right Therapist for You
        </h1> */}
        <p className={styles.questionSpan}>
          A strong therapeutic relationship begins with the right match. Let us
          guide you to a licensed therapist who understands your needs and
          preferences through these simple questions.
        </p>
      </div>
      <div className={styles.formContainer}>
        <form className={styles.form}>
          <h3 className={styles.questionHThree}>Which best describes you?</h3>
          <span className={styles.questionSpan}>Please select</span>
          <div className={styles.buttonCon}>
            <Button type="TransparentButton">I need a Therapist</Button>
            <Button type="TransparentButton">I am a Therapist</Button>
          </div>
          <div>
            <GrCircleInformation /> <p></p>
          </div>
        </form>
      </div>
    </section>
  );
}
