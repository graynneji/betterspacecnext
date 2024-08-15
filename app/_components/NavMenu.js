"use client";
import Link from "next/link";
import styles from "./NavMenu.module.css";
import { useDispatch, useSelector } from "react-redux";
import Button from "./Button";

function NavMenu() {
  const dispatch = useDispatch();
  const isMenuOpen = useSelector((state) => state.menuModal.isMenuOpen);
  // const location = useLocation();

  const handleMenuClick = () => {
    dispatch(toggleMenu());
  };
  console.log(isMenuOpen);
  return (
    <div
      className={styles.NavMenu}
      // className={`${styles.NavMenu} ${
      //   isMenuOpen ? styles.NavMenuOpen : styles.NavMenuClosed
      // }`}
    >
      <ul className={styles.NavMenuContainer}>
        <li className={styles.MenuItem}>
          <Link
            href="/home"
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
            href="/therapy"
            className={`${styles.NavLink} ${styles.NavMenuLink}`}
            onClick={handleMenuClick}
          >
            Therapy
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
      </ul>
      <Button type="join" />
    </div>
  );
}

export default NavMenu;
