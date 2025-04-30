"use client";
import { useState } from "react";
import styles from "./PricingModal.module.css";
import { Check, Lock, ShieldCheck, UserCheck } from "../Icons/Icons";
// Import SVG icons for trust badges
// import { ShieldCheck, Lock, UserCheck, Check } from "..Icons/Icons";

const PricingModal = ({ isOpen = false, onClose }) => {
  const [selectedPlan, setSelectedPlan] = useState("monthly");

  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContainer}>
        <button className={styles.closeButton} onClick={onClose}>
          ✕
        </button>

        <div className={styles.modalHeader}>
          <h2>Continue Your Healing Journey</h2>
          <p>Unlock unlimited therapy messaging and more</p>
        </div>

        <div className={styles.pricingCard}>
          <div className={styles.badge}>Most Popular</div>

          <div className={styles.planDetails}>
            <h3>Premium Therapy Plan</h3>
            <div className={styles.pricing}>
              <span className={styles.price}>$79</span>
              <span className={styles.period}>/month</span>
            </div>
            <p className={styles.weeklyPrice}>Just $19.75 per week</p>
          </div>

          <ul className={styles.featuresList}>
            <li>
              <Check className={styles.checkIcon} />
              <span>Unlimited messaging with your therapist</span>
            </li>
            <li>
              <Check className={styles.checkIcon} />
              <span>Guaranteed 24-hour responses</span>
            </li>
            <li>
              <Check className={styles.checkIcon} />
              <span>Personalized treatment plan</span>
            </li>
            {/* <li>
              <Check className={styles.checkIcon} />
              <span>Access to mood tracking tools</span>
            </li>
            <li>
              <Check className={styles.checkIcon} />
              <span>Weekly progress reports</span>
            </li> */}
          </ul>

          <div className={styles.ctaSection}>
            <button className={styles.subscribeButton}>Subscribe Now</button>
            <p className={styles.cancelNote}>Cancel anytime. No hidden fees.</p>
          </div>

          <div className={styles.trustBadges}>
            <div className={styles.badgeWithIcon}>
              <ShieldCheck className={styles.badgeIcon} />
              <span>HIPAA Compliant</span>
            </div>
            <div className={styles.badgeWithIcon}>
              <Lock className={styles.badgeIcon} />
              <span>256-bit Encryption</span>
            </div>
            <div className={styles.badgeWithIcon}>
              <UserCheck className={styles.badgeIcon} />
              <span>Certified Therapists</span>
            </div>
          </div>
          {/* 
          <div className={styles.testimonial}>
            <p>"This platform changed my life. Worth every penny."</p>
            <span>— Sarah K.</span>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default PricingModal;
