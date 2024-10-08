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
      <div className={styles.errorContainer}>
        <h1 className={styles.error}>Something went wrong!</h1>
        <p className={styles.errorText}>
          <span>⚠️</span>
          <span>Error: {error.message}!</span>
        </p>
      </div>

      <Button onClick={reset} type="error">
        Try again
      </Button>
    </main>
  );
}
