import styles from "./Features.module.css";
import FeaturesItem1 from "@/public/About/fluent_text-bullet-list-square-search-20-regular.svg";
import FeaturesItem2 from "@/public/About/lucide_user-round-check.svg";
import FeaturesItem3 from "@/public/About/heroicons-outline/user-group.svg";
import Image from "next/image";

const Features = () => {
  const featuresList = [
    {
      name: "Evidence Based",
      img: FeaturesItem1,
      text: "Our content and exercises are developed by licensed therapists and mental health experts, ensuring you have access to the latest, scientifically-backed approaches.",
    },
    {
      name: "User Friendly",
      img: FeaturesItem2,
      text: "Our platform is designed for ease of use and accessibility. We want to make taking care of your mental health as simple and seamless as possible.",
    },
    {
      name: "Inclusive and Diverse",
      img: FeaturesItem3,
      text: "Our platform caters to a wide range of needs, and we continuously work towards creating a safe and welcoming space for all.",
    },
  ];

  return (
    <section className={styles.featuresSection}>
      <h1 className={styles.featuresHeadingText}>
        We strive to build a platform that is:
      </h1>
      <div className={styles.featuresContainer}>
        <div className={styles.featuresRow}>
          {featuresList.map((features, index) => (
            <div className={styles.featuresItem} key={index}>
              <div className={styles.featuresItemImageBackground}>
                <Image src={features.img} alt={"Features Image " + index} />
              </div>
              <div className={styles.featuresTexts}>
                <h1 className={styles.featuresHeaderText}>{features.name}</h1>
                <p className={styles.featuresSubText}>{features.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
