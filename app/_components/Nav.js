/* eslint-disable react/jsx-no-comment-textnodes */
"use client";

import styles from "./Nav.module.css";
import Hamburger from "@/public/Hamburger menu.svg";
import Close from "@/public/Close.svg";
import Logo from "@/public/Company Logo.svg";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../store/menuModalSlice";
import Button from "./Button";

function Nav() {
  const pathname = usePathname();
  console.log(pathname);
  const dispatch = useDispatch();
  const isMenuOpen = useSelector((state) => state.menuModal.isMenuOpen);

  const handleMenuClick = () => {
    dispatch(toggleMenu());
  };

  // useEffect(() => {
  //   Aos.init();
  // }, []);
  return (
    <nav className={styles.styledNav}>
      <div className={styles.navbarContainer}>
        <div className={styles.navbarContent}>
          <Link href="/" className={styles.logoLnk}>
            <Image width={160} height={40} src={Logo} alt="Logo" />
          </Link>
          {pathname === "/care" ? (
            ""
          ) : (
            <ul className={styles.navbarItems}>
              <li className={styles.navItem}>
                <Link href="/about" className={styles.navLink}>
                  About
                </Link>
              </li>
              <li className={styles.navItem}>
                <Link href="/pricing" className={styles.navLink}>
                  Pricing
                </Link>
              </li>
              <li className={styles.navItem}>
                <Link href="/article" className={styles.navLink}>
                  Article
                </Link>
              </li>
              <li className={styles.navItem}>
                <Link href="/business" className={styles.navLink}>
                  For business
                </Link>
              </li>
              <li className={styles.navItem}>
                <Link href="/therapy" className={styles.navLink}>
                  <strong>Log In</strong>
                </Link>
              </li>
              <li className={styles.navItem}>
                <Button href="/join" type="join">
                  {/* Join waitlist */}
                  Get started
                </Button>
              </li>
            </ul>
          )}
        </div>
        {/* <div className={styles.navbarButtonContainer}>
          <Button href="/join" type="join">
            Join waitlist
          </Button>
        </div> */}

        {pathname === "/get-started" ? (
          ""
        ) : (
          <div
            className={styles.navToggle}
            onClick={handleMenuClick}
            {...(isMenuOpen ? { isopen: "true" } : {})}
          >
            {isMenuOpen ? (
              <Image
                src={Close}
                style={{ width: "50px", height: "50px" }}
                alt="Close Icon"
                className={styles.closeIcon}
              />
            ) : (
              <Image
                src={Hamburger}
                style={{ width: "50px", height: "50px" }}
                alt="Menu Icon"
                className={styles.menuIcon}
              />
            )}
          </div>
        )}
      </div>
    </nav>
  );
}

export default Nav;
