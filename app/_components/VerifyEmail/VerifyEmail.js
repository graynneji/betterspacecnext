/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useEffect, useRef, useState, useTransition } from "react";
import { supabase } from "../../_lib/supabase";
import { IoMailUnreadOutline } from "react-icons/io5";
import { Provider } from "react-redux";
import Button from "../Button/Button";
import styles from "./VerifyEmail.module.css";
import styles1 from "../Questionaire/Questionaire.module.css";
import Link from "next/link";
import { redirect, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { Flashlight } from "@phosphor-icons/react";

export default function VerifyEmail({ emailId }) {
  const inputRefs = useRef([]);
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const [isButtonEnabled, setIsButtonEnabled] = useState(false);
  const email = emailId.replace("%", "@").replace("40", "");
  const searchParams = useSearchParams();
  const type = searchParams.get("type");
  const [error, setError] = useState();
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  useEffect(() => {
    inputRefs.current[0]?.focus();
  }, []);

  const handlePaste = (e) => {
    e.preventDefault();
    const paste = e.clipboardData.getData("text").slice(0, 6).split("");
    const updatedOtp = [...otp];

    paste.forEach((char, index) => {
      updatedOtp[index] = char;
    });

    setOtp(updatedOtp);
    // Focus on the last filled input
    const lastIndex = paste.length >= 6 ? 5 : paste.length;
    inputRefs.current[lastIndex]?.focus();
    setIsButtonEnabled(true);
  };

  const handleChange = (e, index) => {
    const value = e.target.value;
    if (!/^[0-9]?$/.test(value)) return;

    const updatedOtp = [...otp];
    updatedOtp[index] = value;
    setOtp(updatedOtp);

    if (value && index < 5) {
      inputRefs.current[index + 1]?.removeAttribute("disabled");
      inputRefs.current[index + 1]?.focus();
    }

    setIsButtonEnabled(updatedOtp.every((val) => val !== ""));
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace") {
      const updatedOtp = [...otp];
      updatedOtp[index] = "";
      for (let i = index; i < 6; i++) {
        updatedOtp[i] = "";
        inputRefs.current[i]?.setAttribute("disabled", true);
      }
      if (index > 0) inputRefs.current[index - 1]?.focus();
      setOtp(updatedOtp);
      setIsButtonEnabled(false);
    }
  };

  const verifyOtp = () => {
    startTransition(async () => {
      let finalOtp = otp.join("");

      await supabase.auth.verifyOtp({
        email,
        token: finalOtp,
        type: "email",
      });
    });
    if (type == "therapist") {
      router.push("/dashboard");
    } else {
      router.push("/therapy");
    }
  };

  const resendOtp = async () => {
    const { error } = await supabase.auth.signInWithOtp({
      email: email,
      options: {
        shouldCreateUser: false,
      },
    });
    console.log(error);
    if (error) {
      setError("Error sending otp");
      setTimeout(() => {
        setError("");
      }, 4000);
    }
  };

  return (
    // <div className={styles1.questionaireCon}>
    <div className={styles.card}>
      <div className={styles.top}>
        <h3 style={{ color: "#325343" }}>Verify</h3>
        <div style={{ marginBottom: "10px" }}>
          <p>Your code was sent to you via email </p>
          <p style={{ color: "#325343", fontWeight: 600 }}>
            {emailId.replace("%", "@").replace("40", "")}
          </p>
        </div>
      </div>
      <div className={styles.otpField} onPaste={handlePaste}>
        {otp.map((value, i) => (
          <input
            key={i}
            type="text"
            maxLength="1"
            value={value}
            onChange={(e) => handleChange(e, i)}
            onKeyDown={(e) => handleKeyDown(e, i)}
            ref={(el) => (inputRefs.current[i] = el)}
            className={styles.otpInput}
            disabled={i !== 0 && otp[i - 1] === ""}
          />
        ))}
      </div>

      <button
        className={styles.verifyButton}
        disabled={!isButtonEnabled}
        onClick={verifyOtp}
      >
        {isPending ? "Verifying..." : "Verify"}
      </button>

      <p className={styles.resend} onClick={resendOtp}>
        Didn't receive code?{" "}
        <span style={{ color: "#325343", cursor: "pointer" }}>
          Request again
        </span>
      </p>
      <p className={`${error && styles.error}`}>{error}</p>
    </div>
    // </div>
  );
}
