/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState } from "react";
import styles from "./Review.module.css";
import { Star, PaperPlaneTilt } from "@phosphor-icons/react/dist/ssr";

export default function Review() {
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState("");
  const [hoverRating, setHoverRating] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (rating === 0) {
      alert("Please select a rating");
      return;
    }
    console.log("Review submitted:", { rating, review });
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setRating(0);
      setReview("");
    }, 3000);
  };

  const handleStarHover = (star) => {
    setHoverRating(star);
  };

  const handleStarLeave = () => {
    setHoverRating(0);
  };

  if (submitted) {
    return (
      <div className={styles.container}>
        <div className={styles.card}>
          <div className={styles.successCard}>
            <div className={styles.successIcon}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h2 className={styles.successTitle}>Thank you!</h2>
            <p className={styles.successText}>
              Your review has been submitted successfully.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.header}>
          <h1 className={styles.title}>How was your experience?</h1>
          <p className={styles.subtitle}>We'd love to hear your feedback</p>
        </div>

        <div className={styles.ratingSection}>
          <div className={styles.stars}>
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                type="button"
                className={styles.starButton}
                onClick={() => setRating(star)}
                onMouseEnter={() => handleStarHover(star)}
                onMouseLeave={handleStarLeave}
              >
                <Star
                  size={40}
                  weight={star <= (hoverRating || rating) ? "fill" : "light"}
                  color="#fbbf24"
                />
              </button>
            ))}
          </div>
          <div className={styles.ratingText}>
            {rating > 0 && (
              <span className={styles.ratingLabel}>
                {rating === 1 && "Poor"}
                {rating === 2 && "Fair"}
                {rating === 3 && "Good"}
                {rating === 4 && "Very Good"}
                {rating === 5 && "Excellent"}
              </span>
            )}
          </div>
        </div>

        <div className={styles.reviewSection}>
          <label className={styles.label}>
            Tell us more about your experience
          </label>
          <textarea
            value={review}
            onChange={(e) => setReview(e.target.value)}
            className={styles.textarea}
            placeholder="Share your thoughts..."
            rows={20}
          />
        </div>

        <button
          onClick={handleSubmit}
          className={styles.submitButton}
          disabled={rating === 0}
        >
          <PaperPlaneTilt size={20} />
          Submit Review
        </button>
      </div>
    </div>
  );
}
