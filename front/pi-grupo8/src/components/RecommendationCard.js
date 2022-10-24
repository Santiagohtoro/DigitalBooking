import React from "react";
import styles from "../Styles/recommendationCard.module.scss";

function RecommendationCard(props) {
  const { picture } = props;

  return (
    <div className={styles.recommendationCard}>
      <div className={styles.recommendationImg}>
        <img src={picture} alt="hotel room" />
      </div>
      <div className={styles.recommendationText}>
        <div className={styles.recommendationName}>
          <span>Hotel</span>
          <h2>Hermitage Hotel</h2>
        </div>
        <div className={styles.recommendationRating}>
          <span>8</span>
          <p>Muy bueno</p>
        </div>
      </div>
    </div>
  );
}

export default RecommendationCard;
