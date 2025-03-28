"use client";
import Link from "next/link";
import styles from "./NavMenu.module.css";
import { useDispatch, useSelector } from "react-redux";
import Button from "./Button";
import { toggleMenu } from "../store/menuModalSlice";
// import { usePathname } from "next/navigation";

function NavMenu() {
  // const pathname = usePathname();
  const dispatch = useDispatch();
  const isMenuOpen = useSelector((state) => state.menuModal.isMenuOpen);

  const handleMenuClick = () => {
    dispatch(toggleMenu());
  };

  return (
    <div
      className={`${isMenuOpen ? styles.NavMenu : styles.NavMenuClosed}`}
      // className={`${styles.NavMenu} ${
      //   isMenuOpen ? styles.NavMenuOpen : styles.NavMenuClosed
      // }`}
    >
      <ul className={styles.NavMenuContainer}>
        <li className={styles.MenuItem}>
          <Link
            href="/"
            className={`${styles.NavLink} ${styles.NavMenuLink}`}
            onClick={handleMenuClick}
            // active={location.pathname === "/home"}
          >
            Home
          </Link>
        </li>
        <li className={styles.MenuItem}>
          <Link
            href="/about"
            className={`${styles.NavLink} ${styles.NavMenuLink}`}
            onClick={handleMenuClick}
          >
            About
          </Link>
        </li>
        <li className={styles.MenuItem}>
          <Link
            href="/pricing"
            className={`${styles.NavLink} ${styles.NavMenuLink}`}
            onClick={handleMenuClick}
          >
            Pricing
          </Link>
        </li>
        <li className={styles.MenuItem}>
          <Link
            href="/article"
            className={`${styles.NavLink} ${styles.NavMenuLink}`}
            onClick={handleMenuClick}
          >
            Article
          </Link>
        </li>
        <li className={styles.MenuItem}>
          <Link
            href="/business"
            className={`${styles.NavLink} ${styles.NavMenuLink}`}
            onClick={handleMenuClick}
          >
            Business
          </Link>
        </li>
        <li className={styles.MenuItem}>
          <Link
            href="/therapist"
            className={`${styles.NavLink} ${styles.NavMenuLink}`}
            onClick={handleMenuClick}
          >
            Therapy
          </Link>
        </li>
      </ul>
      <div className={styles.lognavreg}>
        <Link
          className={styles.loginLinkNav}
          onClick={handleMenuClick}
          href="/login"
        >
          Login
        </Link>
        <Button
          href="/get-started"
          onHandleMenuClick={handleMenuClick}
          type="join"
        >
          Get started
        </Button>
      </div>
    </div>
  );
}

export default NavMenu;
