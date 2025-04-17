"use client";
import styles from "../Questionaire/Questionaire.module.css";
import { useRouter } from "next/navigation";
import { useRef } from "react";

export default function Form({ children, setError, action }) {
  const router = useRouter();
  const ref = useRef(null);

  return (
    <form
      ref={ref}
      action={async (formData) => {
        setError(null);

        const response = await action(formData);
        console.log("response", response);
        if (response?.error) {
          setError(response?.error);
          ref.current?.reset();
        } else if (response?.redirectUrl) {
          router.push(response.redirectUrl);
        }
      }}
      className={styles.form}
    >
      {children}
    </form>
  );
}
