/* eslint-disable react/no-unescaped-entities */
import styles from "./Why.module.css";

function Why() {
  return (
    <section className={styles.StyledWhy}>
      <div className={styles.WhyContainer}>
        <span className={styles.WhyBoldText}>Why betterspace?</span>
        <span className={styles.WhyTinyText}>
          Life can be challenging, but your mental health journey doesn’t have
          to be. At BetterSpace, we understand the importance of prioritizing
          your well-being. Whether you're seeking support for stress, anxiety,
          or just need a safe space to express yourself, we're here for you. Our
          mission is simple: to empower you on your path to a happier, healthier
          life.
        </span>
      </div>
    </section>
  );
}

export default Why;
