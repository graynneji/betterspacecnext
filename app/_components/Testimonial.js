import Image from "next/image";
import styles from "./Testimonial.module.css";
import profileTesty from "@/public/profile testimonial.svg";
import { FaQuoteLeft } from "react-icons/fa6";
import { FaQuoteRight } from "react-icons/fa6";
const testimonial = [
  {
    name: "Chioma Gloria",
    testimony:
      "I've never experienced such accessible and empowering therapy. It feels like having a supportive friend available anytime. Subscribing was the best decision I've made for my well-being. Betterspace has shaped my life!",
    image: profileTesty,
  },
  {
    name: "Busola Lawal",
    testimony:
      "I finally found a mental health resource that truly resonates with me. The expert support and engaging tools have brought me confidence and joy. If you're considering investing in your mental health, this is your sign!",
    image: profileTesty,
  },
  {
    name: "Abiola Kenneth",
    testimony:
      "My mental health journey has been redefined with such genuine empathy and support. The growth I've experienced has been incredible. If you're ready to thrive, taking this step could be your path to a brighter future.",
    image: profileTesty,
  },
];

export default function Testimonial() {
  return (
    <section className={styles.testimonialContainer}>
      <div style={{ textAlign: "center" }}>
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
            <div className={styles.testyText}>
              <FaQuoteLeft className={styles.textyIconLeft} />

              <span className={styles.testimonies}>
                {testimonial[i].testimony}
              </span>
              <FaQuoteRight className={styles.textyIconRight} />
            </div>
            <span className={styles.profileTesty}>
              <div>
                {/* <Image
                  style={{
                    width: "48px",
                    height: "48px",
                    maxWidth: "100%",
                    maxHeight: "100%",
                    borderRadius: "50px",
                  }}
                  src={profileTesty}
                  alt="profile Image"
                /> */}
              </div>
              <span className={styles.testyName}>{testimonial[i].name}</span>
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
