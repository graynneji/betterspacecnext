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

        if (response?.error) {
          setError(response?.error);
          // setError(error?.error?.message);
          ref.current?.reset();
        }
        if (response?.redirectUrl) {
          router.push(response?.redirectUrl);
        }
        // const final = JSON.parse(result);
        // console.log(final);
        // if (final.error.status !== "405") {
        //   setError(final?.error);
        //   ref.current?.reset();
        // }
        // if (error) {
        //   setError(final?.error);
        //   console.log(error?.error);
        // }
      }}
      className={styles.form}
    >
      {children}
    </form>
  );
}
