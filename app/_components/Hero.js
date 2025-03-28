/* eslint-disable no-unused-vars */
"use client";
import styles from "./Hero.module.css"; // Import the CSS module
// import RightHeroImage from "@/public/Img.svg";
import RightHeroImage from "@/public/RightHero.svg";
import Input from "./Input";
import { Form, useForm } from "react-hook-form";
import Button from "./Button";
import Flower from "@/public/Elements-geometric-shape-flower-marigold-nature.svg";
import Line from "@/public/Line 1.svg";
import Star from "@/public/Elements-geometric-shape-star-cosmos.svg";
import Image from "next/image";
import Curve from "@/public/wave.svg";

function Hero() {
  const {
    register,
    reset,
    formState: { errors },
    onSubmit,
  } = useForm();

  const handleSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <>
      <section className={styles.heroContainer}>
        <div className={styles.styledHero}>
          <div className={styles.leftHero}>
            <div className={styles.leftTextHero}>
              <h1 className={styles.leftTextBold}>
                Reclaim your <br />
                mental wellbeing <br />
                with betterspace
                <div className={styles.styledLine}>
                  <Image
                    style={{ width: "80%", height: "100%" }}
                    src={Line}
                    alt="Line"
                  />
                </div>
              </h1>
              <h5 className={styles.leftTextLight}>
                Discover a world of mental health resources and connect with
                professionals globally on our online platform, empowering you to
                prioritize your well-being anytime, anywhere.
              </h5>
            </div>

            <div className={styles.buttonDiv}>
              {/* REMEMBER TO CHANGE THE CHILDREN JOIN WAITLIST TO GET STARTED */}
              <Button type="started">Get started</Button>
              <h5 className={styles.leftTextLightLight}>
                Enjoy flexible scheduling and personalized care from our
                licensed therapists.
              </h5>
            </div>

            {/* <form className={styles.styledForm} onSubmit={handleSubmit}>
            <Input
              inputType="join"
              type="email"
              id="email"
              placeholder="Email Address"
              register={register}
              error={errors.email}
            />
            <Button type="joinHero">Join</Button>
          </form> */}
          </div>
          <div className={styles.rightHero}>
            <div className={styles.styledFlower}>
              <Image
                style={{ width: "60%", height: "100%" }}
                src={Flower}
                alt="flower"
              />
            </div>
            <Image
              style={{ width: "100%", height: "100%" }}
              src={RightHeroImage}
              alt="Hero Image man and a woman hugging sign of peace"
              className={styles.blur}
            />
            <div className={styles.styledStar}>
              <Image
                style={{ width: "70%", height: "100%" }}
                src={Star}
                alt="Star"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
