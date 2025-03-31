"use client";
import Button from "../_components/Button";
import styles from "./not-found.module.css";
//error boundary needs to be a client component
//only rendering errors would be caught here errors from maybe call backs will not be caught here
//it wouldn't catch errors that might happen in the root layout
//global-error.js will catch in the root and replace the entire layout
export default function Error({ error, reset }) {
  return (
    <main className={`${styles.fourOfourmain} ${styles.fourText}`}>
      <h1 style={{ fontSize: "16px" }}>Something went wrong!</h1>
      <p style={{ fontSize: "12px" }}>{error.message}!</p>

      <Button onClick={reset} type="fourOFour">
        Try again
      </Button>
    </main>
  );
}
