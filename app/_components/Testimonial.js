import Image from "next/image";
import styles from "./Testimonial.module.css";
import profileTesty from "@/public/profile testimonial.svg";
import { FaQuoteLeft } from "react-icons/fa6";
import { FaQuoteRight } from "react-icons/fa6";
const testimonial = [
  {
    name: "Jenny",
    testimony:
      "For years, anxiety was holding me back at work. Therapy through [Your Service Name] helped me identify my triggers and develop coping mechanisms. Now I feel more confident and in control.",
    image: "",
  },
];

export default function Testimonial() {
  return (
    <section className={styles.testimonialContainer}>
      <div>
        <h1 className={styles.TestimonialBold}>
          They Got Better, You Can Too!
        </h1>
        <h1 className={styles.testimonialLight}>
          Hear how betterspace is helping people just like you overcome
          challenges and improve their mental well-being.
        </h1>
      </div>
      <div className={styles.testyContainer}>
        {Array.from({ length: 3 }, (_, i) => (
          <div key={i + 1} className={styles.testy}>
            <p className={styles.testyText}>
              <FaQuoteLeft /> For years, anxiety was holding me back at work.
              Therapy through [Your Service Name] helped me identify my triggers
              and develop coping mechanisms. Now I feel more confident and in
              control. <FaQuoteRight />
            </p>
            <span className={styles.profileTesty}>
              <div>
                <Image
                  style={{
                    width: "48px",
                    height: "48px",
                    maxWidth: "100%",
                    maxHeight: "100%",
                    borderRadius: "50px",
                  }}
                  src={profileTesty}
                  alt="profile Image"
                />
              </div>
              <span className={styles.testyName}>Jenny</span>
            </span>
          </div>
        ))}
      </div>
      <h1 className={styles.recievedHelp}>
        Over 56,826 persons already recieved help
      </h1>
    </section>
  );
}
