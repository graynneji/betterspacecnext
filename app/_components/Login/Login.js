"use client";
import styles from "../Questionaire/Questionaire.module.css";
import styles1 from "./Login.module.css";
import Form from "../Form/Form";
import Input from "../Input/Input";
import Button from "../Button/Button";
// import { useRef, useState } from "react";
import { login } from "../../_lib/actions";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

export default function Login() {
  // const error = "";
  // const [error, setError] = useState(null);
  const searchParams = useSearchParams();
  const error = searchParams.get("error");
  const router = useRouter();

  return (
    <>
      <div className={styles.questionaireCon}>
        <div className={styles1.loginCon}>
          {/* <Form setError={setError} action={login}> */}
          <form
            action={async (formData) => {
              const response = await login(formData);
              router.push(response);
            }}
            className={styles.form}
          >
            <div
              className={styles.createFormSection}
              style={{ textAlign: "left" }}
            >
              <span style={{ fontSize: "20px" }}>Login</span>
              {error && (
                <p style={{ color: "red" }}>{decodeURIComponent(error)}</p>
              )}
              <div style={{ width: "100%" }}>
                <Input
                  type="email"
                  inputType="text"
                  label="Email Address"
                  id="email"
                  name="email"
                  placeholder="Email Address"
                  // onChange={() => {
                  //   setError(null);
                  // }}
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
                  // onChange={() => {
                  //   setError(null);
                  // }}
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
          {/* </Form> */}
        </div>
      </div>
    </>
  );
}
