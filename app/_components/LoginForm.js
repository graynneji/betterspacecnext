"use client";
import Input from "./Input";
import styles from "./Questionaire.module.css";
import styles1 from "./Login.module.css";
import { login } from "../_lib/actions";
import Button from "./Button";
import { useState } from "react";
import { useRef } from "react";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export default function LoginForm() {
  const ref = useRef(null);
  const [error, setError] = useState("");
  console.log(error, error.message);

  return (
    <form
      ref={ref}
      action={async (formData) => {
        // const error = await login(formData);
        const result = await login(formData);

        const final = JSON.parse(result);
        console.log(final);
        if (final.error.status !== "405") {
          setError(final?.error);
          ref.current?.reset();
        }
        if (error) {
          //   const result = JSON.parse(error);
          setError(final?.error);
          console.log(error?.error);
          ref.current?.reset();
        }
        // if (!error) {
        //   revalidatePath("/", "layout");
        //   redirect("/care");
        // }
      }}
      className={styles.form}
    >
      <div className={styles.createFormSection}>
        <span style={{ fontSize: "30px" }}>Login</span>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <div style={{ width: "100%" }}>
          <Input
            type="email"
            inputType="create"
            label="Email Address"
            id="email"
            name="email"
            placeholder="Email Address"
            onChange={() => {
              setError("");
            }}
          />
          {error?.email?.length > 0 ? (
            <p className={styles.error}>{error?.email[0]}</p>
          ) : (
            ""
          )}
        </div>
        <div style={{ width: "100%" }}>
          <Input
            type="password"
            inputType="create"
            label="Password"
            id="password"
            name="password"
            placeholder="Password"
            onChange={() => {
              setError("");
            }}
          />
          {error?.password?.length > 0 ? (
            <p className={styles.error}>{error?.password[0]}</p>
          ) : (
            ""
          )}
        </div>
        <h3 className={styles1.forgetPassword}>Forgot password?</h3>
        <Button btntype="login">Login</Button>
        <h6 className={styles1.getstarted}>
          Don&#39;t have an account? <strong>Get started</strong>
        </h6>
      </div>
    </form>
  );
}
