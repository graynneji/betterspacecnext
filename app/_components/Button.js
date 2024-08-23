/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import Link from "next/link";
import styles from "./Button.module.css"; // Import the CSS module

function Button({
  children,
  disabled,
  type,
  href,
  handleSection,
  defaultValue,
}) {
  if (type === "join") {
    return (
      <button className={styles.navbarButton}>
        <Link href="/join">{children}</Link>
      </button>
    );
  }
  if (type === "download") {
    return (
      <button className={`${styles.download} ${styles.navbarButton}`}>
        {children}
      </button>
    );
  }

  // COOKIES BUTTON
  if (type === "reject") {
    return <button className={`${styles.reject}`}>{children}</button>;
  }
  if (type === "accept") {
    return <button className={`${styles.accept}`}>{children}</button>;
  }

  // CALL TO ACTION BUTTON
  if (type === "submit") {
    return (
      <button disabled={disabled} type="submit" className={styles.submitBtn}>
        {children}
      </button>
    );
  }

  if (type === "joinHero") {
    return (
      <button type="submit" className={styles.joinBtn}>
        {children}
      </button>
    );
  }
  // HERO GET STARTED
  if (type === "started") {
    return (
      <button type="submit" className={`${styles.btn} ${styles.getstarted}`}>
        <Link href="/get-started">{children}</Link>
      </button>
    );
  }

  // Other GET STARTED
  if (type === "start") {
    return (
      <button type="submit" className={styles.startBtn}>
        {children}
      </button>
    );
  }
  if (type === "business") {
    return (
      <button type="business" className={styles.businessBtn}>
        {children}
      </button>
    );
  }

  // ERROR page BUTTON
  if (type === "fourOFour") {
    return (
      <Link type="fourOFour" href={href} className={styles.fourOFour}>
        {children}
      </Link>
    );
  }
  if (type === "error") {
    return (
      <button type="error" className={styles.error}>
        {children}
      </button>
    );
  }

  // QUESTIONAIRE BUTTON
  if (type === "TransparentButton") {
    return (
      <input
        readOnly
        onClick={handleSection}
        type="text"
        className={`${styles.btn} ${styles.transparent}`}
        value={defaultValue}
      />
    );
  }
  if (type === "ColorButton") {
    return (
      <button type="error" className={`${styles.btn} ${styles.color}`}>
        {children}
      </button>
    );
  }

  // WAITLIST PAGE
  if (type === "waitlist") {
    return (
      <button className={`${styles.btn} ${styles.waitlist}`}>
        <Link href="/join">{children}</Link>
      </button>
    );
  }
  if (type === "partner") {
    return (
      <button className={`${styles.btn} ${styles.partner}`}>
        <Link href="/contact">{children}</Link>
      </button>
    );
  }
}

export default Button;
