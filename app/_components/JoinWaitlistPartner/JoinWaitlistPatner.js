import Image from "next/image";
import styles from "./JoinWaitlistPatner.module.css";
// import Logo from "@/public/Logo_PNG_4-removebg-preview.png";
import Logo from "@/public/Logo.svg";
import Button from "../Button/Button";
import Link from "next/link";
export default function JoinWaitlistPatner() {
  return (
    <section className={styles.joinwaitlistpatnercontainer}>
      <header>
        <nav className={styles.navmenu}>
          <div>
            <Image src={Logo} alt="Logo" width={160} height={40} />
          </div>
          <ul className={styles.List}>
            <Link href="https://www.linkedin.com/company/betterspacemed">
              <li>Linkedin</li>
            </Link>
            <Link href="https://www.instagram.com/betterspace_ng">
              <li>Instagram</li>
            </Link>
            <Link href="https://x.com/betterspace_ng">
              <li>Twitter</li>
            </Link>
          </ul>
        </nav>
      </header>
      <div className={styles.hero}>
        <h1 className={styles.heroHOne}>
          Reclaim Your Mental Wellbeing <br />
          With Betterspace
        </h1>
        <h5 className={styles.leftTextLight}>
          Discover a world of mental health resources <br />
          and connect with professionals globally on our online platform,
          empowering
          <br /> you to prioritize your well-being anytime, anywhere.
        </h5>
      </div>

      <div className={styles.buttonCon}>
        <Button type="waitlist">Join Our Waitlist</Button>
        <Button type="partner">Partner With Us</Button>
      </div>

      <div className={styles.contact}>
        <span>
          For more info contact us on{" "}
          <span style={{ color: "#eff87a" }}>info@betterspaace.ng</span>
        </span>
      </div>
    </section>
  );
}
