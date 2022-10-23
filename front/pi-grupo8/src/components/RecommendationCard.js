import React from "react";
import styles from "../Styles/recommendationCard.module.scss";

function RecommendationCard(props) {
  const { picture } = props;

  return (
    <div className={styles.recommendationCard}>
      <div className={styles.recommendationImg}>
        <img src={picture} alt="hotel room" />
      </div>
      <div>
        <h3>Card text</h3>
        <button>Ver más</button>
      </div>
    </div>
  );
}

export default RecommendationCard;
