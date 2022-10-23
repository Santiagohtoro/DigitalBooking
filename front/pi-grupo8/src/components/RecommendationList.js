import React from "react";
import RecommendationCard from "./RecommendationCard";
import recommendations from "../assets/Recommendations.json";
import styles from "../Styles/recommendationList.module.scss";

function RecommendationList() {
  return (
    <section className={styles.recommendationsBackground}>
      <div className={styles.recommendationsBlock}>
        <h2>Recomendaciones</h2>
        <div className={styles.recommendationsContainer}>
          {recommendations.map((r) => (
            <RecommendationCard picture={r.img} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default RecommendationList;
