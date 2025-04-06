/* eslint-disable no-unused-vars */
import styles from "./Happy.module.css"; // Import the CSS module
import ImageHappy from "@/public/IMGHappy.svg";
import StarFlower from "@/public/starFlower.svg";
import Image from "next/image";
import WaveHaikei from "@/public/wave-haikei(4).svg";
// import { Parachute, ShieldCheck, HandHeart } from "phosphor-react";

// Function to determine tab colors based on index
const getTabColor = (index) => {
  switch (index) {
    case 0:
      return "#FFE27C";
    case 1:
      return "#FFFBF4";
    case 2:
      return "#B1D8FC";
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
      // icon: Parachute,
    },
    {
      header: "Expert guidance",
      body: "Betterspace provides access to a team of experienced mental health professionals and counselors who are committed to your well-being.",
      // icon: ShieldCheck,
    },
    {
      header: "Accessible care",
      body: "Our platform is available 24/7, ensuring that help is always within reach, whenever you need it.",
      // icon: "",
    },
  ];

  return (
    <>
      <section className={styles.styledHappy}>
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
        <div className={styles.whyContainer}>
          <h3 className={styles.whyHead}>Why betterspace?</h3>
          <p className={styles.whyPara}>
            At BetterSpace, we understand the importance of prioritizing your
            well-being. Whether you&#39;re seeking support for stress, anxiety,
            or just need a safe space to express yourself, we&#39;re here for
            you.
          </p>
        </div>
        <div className={styles.happyContainer}>
          <picture className={styles.happyImage}>
            {/* <span className={styles.starFlow}> */}
            {/* <Image
            style={{ width: "40%", height: "100%" }}
            placeholder="blur"
            quality={100}
            src={StarFlower}
            alt="star flower"
            className={styles.star}
          /> */}
            {/* </span> */}

            <Image
              style={{ minWidth: "100%", width: "100%", height: "100%" }}
              // placeholder="blur"
              quality={100}
              src={ImageHappy}
              alt="content"
              // blurDataURL=""
              className={styles.Immmage}
            />
          </picture>

          <div className={styles.rightHappy}>
            {Array.from({ length: 3 }, (_, i) => (
              <div
                key={i + 1}
                className={styles.tabs}
                style={{ backgroundColor: getTabColor(i) }}
              >
                <div>
                  <span className={styles.tabBoldText}>
                    {tabContent[i].header}
                  </span>
                  {/* <span><tabContent[i].icon /></span> */}
                </div>
                <span className={styles.tabLightText}>
                  {tabContent[i].body}
                </span>
              </div>
            ))}
          </div>
        </div>
        {/* <div className={styles.curveTop}></div> */}
      </section>
    </>
  );
}

export default Happy;
