import styles from "./Questionaire.module.css";
import styles1 from "./Login.module.css";
import LoginForm from "./LoginForm";

export default async function Login() {
  return (
    <>
      <div className={styles.questionaireCon}>
        <div className={styles1.loginCon}>
          <LoginForm />
        </div>
      </div>
    </>
  );
}
