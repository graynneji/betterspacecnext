import Link from "next/link";
import styles from "./not-found.module.css";
import Button from "./_components/Button";
function NotFound() {
  return (
    <main className={styles.fourOfourmain}>
      <div className={styles.notContainer}>
        <h1 className={styles.four}>404</h1>
        <h1 className={styles.fourText}>This page could not be found :(</h1>
      </div>
      <Link href="/" type="fourOFour">
        Go back to Homepage &#8594;
      </Link>
    </main>
  );
}

export default NotFound;
