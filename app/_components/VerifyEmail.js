import { IoMailUnreadOutline } from "react-icons/io5";
import { Provider } from "react-redux";
import Button from "./Button";
import styles1 from "./VerifyEmail.module.css";
import styles from "./Questionaire.module.css";
import Link from "next/link";

export default function VerifyEmail({ emailId }) {
  return (
    <div className={styles.questionaireCon}>
      <IoMailUnreadOutline style={{ fontSize: "48px" }} />
      <h2>Check your email</h2>
      <p>
        We just sent a verification link to the email address you provided{" "}
        <strong>{emailId}</strong>
      </p>
      <div className={styles1.loginVerify}>
        <h2>
          <Link href="/login" type="submit">
            Login &#8594;
          </Link>
        </h2>
      </div>
    </div>
  );
}
