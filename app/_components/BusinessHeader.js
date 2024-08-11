import React from "react";
import PropTypes from "prop-types";
import styles from "./BusinessHeader.module.css";
import GreenLine from "@/public/green-line.svg";
import Image from "next/image";
import Button from "./Button";

const BusinessHeader = ({ name, img, img1, img2 }) => {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={`${styles.content} ${styles.text}`}>
            <h1 className={styles.heading}>
              Betterspace for{" "}
              <span className={styles.spanText}>
                {name}
                <Image
                  style={{ maxWidth: "100%", height: "auto" }}
                  src={GreenLine}
                  alt="Green line"
                />
              </span>
            </h1>
            <p className={styles.supportingText}>
              Empower your team with the mental health resources they need to
              thrive.
            </p>
          </div>
          <div className={`${styles.content} ${styles.actions}`}>
            <Button type="business">Request a demo</Button>
          </div>
        </div>
        <div>
          <div className={styles.rightImage}>
            {name === "therapist" && (
              <div className={styles.upIcon}>
                <Image
                  style={{ maxWidth: "100%", height: "auto" }}
                  src={img1}
                  alt="Business Header Background"
                />
              </div>
            )}
            <Image
              style={{ maxWidth: "100%", height: "auto" }}
              src={img}
              alt="Business Header Background"
            />
            {name === "therapist" && (
              <div className={styles.iccon}>
                <Image
                  style={{ maxWidth: "100%", height: "auto" }}
                  src={img2}
                  alt="Business Header Background"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

// BusinessHeader.propTypes = {
//   name: PropTypes.string.isRequired,
//   img: PropTypes.string.isRequired,
//   img1: PropTypes.string,
//   img2: PropTypes.string,
// };

export default BusinessHeader;
