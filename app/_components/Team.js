"use client";
import styles from "./Team.module.css";
import profiles from "@/public/IMG_9015-min.jpg";
import Image from "next/image";
import ArrowRight from "@/public/big-arrow-right-1.svg";
import ArrowLeft from "@/public/big-arrow-right.svg";
import { useRef } from "react";
export default function Team() {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -312, behavior: "smooth" });
    console.log("left");
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 312, behavior: "smooth" });
    console.log("right");
  };
  return (
    <section className={styles.teamContainer}>
      <div className={styles.headerForArrows}>
        <div className={styles.textContainer}>
          <h1 className={styles.teamTextBold}>Our team</h1>
          <span className={styles.teamTextLight}>
            We believe in empathy, support, and providing the best care
            possible.
          </span>
        </div>
        <div className={styles.Arrows}>
          <Image
            onClick={scrollLeft}
            src={ArrowLeft}
            alt="arrows team"
            width={40}
            height={40}
            style={{ cursor: "pointer" }}
          />
          <Image
            onClick={scrollRight}
            src={ArrowRight}
            alt="arrows team"
            width={40}
            height={40}
            style={{ cursor: "pointer" }}
          />
        </div>
      </div>
      <div ref={scrollRef} className={styles.profiles}>
        {Array.from({ length: 8 }, (_, i) => (
          <div key={i + 1} className={styles.profileImageCon}>
            <Image
              fill
              src={profiles}
              alt="Team members"
              className={styles.teamImages}
              //   style={{ }}
            />
            <div className={styles.portfolio}>
              <h1 className={styles.profileTextBold}>Ukaegbu Gray</h1>
              <h3 className={styles.profileTextLight}>
                Senior Software Developer
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
