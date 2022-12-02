import React, { useEffect } from "react";
import RecommendationCard from "./RecommendationCard";
import recommendations from "../assets/Recommendations.json";
import styles from "../Styles/recommendationList.module.scss";
import useApiProducts from '../api-products/useApiProducts';

function RecommendationList() {
  const {data ,getData} = useApiProducts();
  useEffect(()=>{
    getData();
  },[]);

  console.log(data);
  return (
 
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

  );
}

export default RecommendationList;
