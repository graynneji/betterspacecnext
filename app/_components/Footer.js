"use client";
import Logo from "@/public/Logo.svg";
import Linkedin from "@/public/Linkedin.svg";
import Instagram from "@/public/Instagram.svg";
import Twitter from "@/public/Twittter.svg";
import Facebook from "@/public/Facebook.svg";
import Chevron from "@/public/arrow-right.svg";
import Link from "next/link";
import styles from "./Footer.module.css";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import { usePathname } from "next/navigation";

function Footer() {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <footer className={styles.StyledFooter}>
      <div className={styles.custom}>
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            opacity=".25"
            className={styles.shape}
          ></path>
          <path
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
            opacity=".5"
            className={styles.shape}
          ></path>
          <path
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
            className={styles.shape}
          ></path>
        </svg>
      </div>
      <div className={styles.FooterTopContainer}>
        <div className={styles.FooterTopText}>
          <h5 className={styles.FooterTopTextBold}>
            Subscribe to our newsletter
            {/* Your well-being deserves to be a priority. */}
          </h5>
          <p className={styles.FooterTopTextLight}>
            Stay updated on new releases and features, guides, and case studies.
            {/* Be among the first to experience Betterspace */}
          </p>
        </div>
        <div className={styles.FooterTopField}>
          <input
            className={styles.FooterTopFieldInput}
            placeholder="Email Address"
            type="email"
          />
          <button className={styles.FooterTopFieldButton}>
            Subscribe
            {/* <FaArrowRight /> */}
            {/* <Image styles={{ width: "100%" }} src={Chevron} alt="Arrow Right" /> */}
          </button>
        </div>
      </div>
      <div className={styles.FooterBottomContainer}>
        <div className={styles.FooterBottomContent}>
          <Image
            style={{ width: "100%", height: "fit-content" }}
            src={Logo}
            alt="Logo"
            // width="100%"
          />
        </div>
        <div className={styles.FooterBottomBlock}>
          <div className={styles.FooterBottomContent}>
            <Link href="/about" className={styles.FooterBottomLink}>
              About
            </Link>
            <Link href="/pricing" className={styles.FooterBottomLink}>
              Pricing
            </Link>
            <Link href="/contact" className={styles.FooterBottomLink}>
              Contact
            </Link>
            <Link href="/privacy" className={styles.FooterBottomLink}>
              Privacy
            </Link>
            <Link href="/terms" className={styles.FooterBottomLink}>
              Terms
            </Link>
          </div>
          <div className={styles.FooterSocials}>
            <button className={styles.FooterSocialsButton}>
              <Image styles={{ width: "100%" }} src={Linkedin} alt="Linkedin" />
            </button>
            <button className={styles.FooterSocialsButton}>
              <Image
                styles={{ width: "100%" }}
                src={Instagram}
                alt="Instagram"
              />
            </button>
            <button className={styles.FooterSocialsButton}>
              <Image styles={{ width: "100%" }} src={Twitter} alt="Twitter" />
            </button>
            <button className={styles.FooterSocialsButton}>
              <Image styles={{ width: "100%" }} src={Facebook} alt="Facebook" />
            </button>
          </div>
        </div>
        <div className={styles.FooterBottomBlock}>
          <p className={styles.FooterBottomBlockText}>
            © 2024 betterspace. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
