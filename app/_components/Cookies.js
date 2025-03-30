"use client";
import Link from "next/link";
import Button from "./Button";
import styles from "./Cookies.module.css";
import { useEffect, useLayoutEffect, useState } from "react";

export default function Cookies() {
  const [cookies, setCookies] = useState(null);

  useEffect(() => {
    setCookies(localStorage.getItem("cookies"));
  }, []);

  const handleCookies = (value) => {
    localStorage.setItem("cookies", value);
    setCookies(value);
  };
  if (cookies) return;
  return (
    <section className={styles.CookiesSec}>
      <div>
        <h1 className={styles.cookieHOne}>Cookie settings</h1>
        {/* <span>
          We use cookies to enhance your experience, analyze site traffic and
          deliver personalized content. Read our 
          <Link href="/privacy">Cookie Policy.</Link>
        </span> */}
        <span className={styles.cookieHSpan}>
          We use cookies on our website to give you the best possible
          experience. By continuing to browse or by clicking &quot;Accept All
          Cookies,&quot; you agree to the storing of cookies on your device to
          enhance site navigation, analyze site usage, and assist in our
          marketing efforts. You can manage your preferences or find out more by
          visiting our  <Link href="/privacy">Cookie Policy.</Link>
        </span>
        <div className={styles.cookieButtonContainer}>
          <Button
            type="reject"
            onHandleMenuClick={() => handleCookies("Reject")}
          >
            Reject
          </Button>
          <Button
            type="accept"
            onHandleMenuClick={() => handleCookies("Accept")}
          >
            Accept
          </Button>
        </div>
      </div>
    </section>
  );
}
