import React from "react";
import RecommendationCard from "./RecommendationCard";
import recommendations from "../assets/Recommendations.json";
import styles from "../Styles/recommendationList.module.scss";
import { Outlet } from "react-router-dom";

function RecommendationList() {
  return (
    <>
      <section className={styles.recommendationsBackground}>
        <div className={styles.recommendationsBlock}>
          <h2>Recomendaciones</h2>
          <div className={styles.recommendationsContainer}>
            {recommendations.map((r) => (
              <RecommendationCard
                picture={r.img}
                key={r.id}
                title={r.title}
                category={r.category}
                location={r.location}
                id={r.id}
              />
            ))}
          </div>
        </div>
      </section>
      <Outlet />
    </>
  );
}

export default RecommendationList;
