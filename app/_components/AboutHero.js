import styles from "./AboutHero.module.css";

const AboutHero = () => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroContainer}>
        <div className={styles.heroHeader}>
          <h1 className={styles.heroHeadingText}>
            We understand. Because we have been there.
          </h1>
          <p className={styles.heroHeadingSubText}>
            We believe mental health is just as important as physical health.
            That&#39;s why we created <span>betterspace</span>, a comprehensive
            mental well-being platform designed to empower you on your journey
            towards emotional balance and growth.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
