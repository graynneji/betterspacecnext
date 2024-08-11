/* eslint-disable no-unused-vars */
import styles from "./Happy.module.css"; // Import the CSS module
import ImageHappy from "@/public/IMGHappy.svg";
import StarFlower from "@/public/starFlower.svg";
import Image from "next/image";

// Function to determine tab colors based on index
const getTabColor = (index) => {
  switch (index) {
    case 0:
      return "rgba(239, 248, 122, 1)";
    case 1:
      return "rgba(248, 244, 240, 1)";
    case 2:
      return "rgba(207, 220, 255, 1)";
    default:
      return "pink";
  }
};

function Happy() {
  //Content for the tabs
  const tabContent = [
    {
      header: "A safe haven",
      body: "Our platform provides a safe haven where you can share your thoughts, feelings, and experiences with others who understand.",
    },
    {
      header: "Expert guidance",
      body: "Betterspace provides access to a team of experienced mental health professionals and counselors who are committed to your well-being.",
    },
    {
      header: "Accessible care",
      body: "Our platform is available 24/7, ensuring that help is always within reach, whenever you need it.",
    },
  ];

  return (
    <section className={styles.styledHappy}>
      <div className={styles.happyContainer}>
        <picture className={styles.happyImage}>
          <span className={styles.starFlow}>
            <Image
              style={{ width: "100%", height: "100%" }}
              // placeholder="blur"
              quality={100}
              src={StarFlower}
              alt="star flower"
              // blurDataURL=""
            />
          </span>
          <Image
            style={{ width: "100%", height: "100%" }}
            // placeholder="blur"
            quality={100}
            src={ImageHappy}
            alt="content"
            // blurDataURL=""
          />
        </picture>

        <div className={styles.rightHappy}>
          {Array.from({ length: 3 }, (_, i) => (
            <div
              key={i + 1}
              className={styles.tabs}
              style={{ backgroundColor: getTabColor(i) }}
            >
              <span className={styles.tabBoldText}>{tabContent[i].header}</span>
              <span className={styles.tabLightText}>{tabContent[i].body}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Happy;
