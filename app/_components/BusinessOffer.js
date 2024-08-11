import Image from "next/image";
import styles from "./BusinessOffer.module.css";
import Background from "@/public/business-offer.png";

const BusinessOffer = () => {
  return (
    <section className={styles.Features}>
      <div className={styles.BlockHeader}>
        <h1 className={styles.Heading}>What we offer</h1>
      </div>
      <div className={styles.Container}>
        <div className={styles.BackgroundContent}>
          <Image
            style={{ maxWidth: "100%", height: "auto" }}
            src={Background}
            alt="Business Offer Background"
          />
        </div>
        <div className={styles.Content}>
          <div className={styles.Feature}>
            <div className={styles.Number}>1</div>
            <div className={styles.Feature}>
              <h1 className={styles.Heading}>
                Matching with the Perfect Therapist
              </h1>
              <p className={styles.SupportingText}>
                Employees connect with licensed therapists who specialize in
                their specific needs and preferences. Betterspace&#39;s diverse
                therapist network ensures a comfortable and effective
                therapeutic experience for everyone.
              </p>
            </div>
          </div>
          <div className={styles.Feature}>
            <div className={styles.Number}>2</div>
            <div className={styles.Feature}>
              <h1 className={styles.Heading}>The Flexibility of Teletherapy</h1>
              <p className={styles.SupportingText}>
                Sessions are conducted securely online via video, voice call or
                chat offering employees the flexibility to schedule appointments
                around their busy schedules, making therapy more accessible than
                ever.
              </p>
            </div>
          </div>
          <div className={styles.Feature}>
            <div className={styles.Number}>3</div>
            <div className={styles.Feature}>
              <h1 className={styles.Heading}>
                Unwavering Confidentiality and Privacy
              </h1>
              <p className={styles.SupportingText}>
                Employees can access therapy without any fear of it impacting
                their job security or personal privacy. Betterspace prioritizes
                complete confidentiality and adheres to the highest ethical
                standards.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessOffer;
