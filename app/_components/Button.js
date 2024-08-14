/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import Link from "next/link";
import styles from "./Button.module.css"; // Import the CSS module

function Button({ children, disabled, type, href }) {
  if (type === "join") {
    return (
      <button className={styles.navbarButton}>
        <Link href="/join">Join Waitlist</Link>
      </button>
    );
  }

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
}

export default Button;
