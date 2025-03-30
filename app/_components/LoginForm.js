"use client";
import Input from "./Input";
import styles from "./Questionaire.module.css";
import styles1 from "./Login.module.css";
import { login } from "../_lib/actions";
import Button from "./Button";
import { useState } from "react";
import { useRef } from "react";
import { revalidatePath } from "next/cache";
import { redirect, useRouter } from "next/navigation";

export default function LoginForm() {
  const ref = useRef(null);
  const [error, setError] = useState(null);
  const router = useRouter();
  // console.log(error, error.message);

  return (
    <form
      ref={ref}
      action={async (formData) => {
        setError(null);

        const response = await login(formData);

        if (response?.error) {
          setError(response?.error);
          // setError(error?.error?.message);
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
        //   ref.current?.reset();
        // }
      }}
      className={styles.form}
    >
      <div className={styles.createFormSection} style={{ textAlign: "left" }}>
        <span style={{ fontSize: "20px" }}>Login</span>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <div style={{ width: "100%" }}>
          <Input
            type="email"
            inputType="text"
            label="Email Address"
            id="email"
            name="email"
            placeholder="Email Address"
            onChange={() => {
              setError(null);
            }}
          />
          {/* {error?.email?.length > 0 ? (
            <p className={styles.error}>{error?.email[0]}</p>
          ) : (
            ""
          )} */}
        </div>
        <div style={{ width: "100%" }}>
          <Input
            type="password"
            inputType="text"
            label="Password"
            id="password"
            name="password"
            placeholder="Password"
            onChange={() => {
              setError(null);
            }}
          />
          {/* {error?.password?.length > 0 ? (
            <p className={styles.error}>{error?.password[0]}</p>
          ) : (
            ""
          )} */}
        </div>
        <h3 className={styles1.forgetPassword}>Forgot password?</h3>
        <Button btntype="login">Login</Button>
        <h6 className={styles1.getstarted}>
          Don&#39;t have an account?{" "}
          <strong style={{ color: "#022c22" }}>Get started</strong>
        </h6>
      </div>
    </form>
  );
}
