import React, { useEffect } from "react";
import RecommendationCard from "./RecommendationCard";
import recommendations from "../assets/Recommendations.json";
import styles from "../Styles/recommendationList.module.scss";
import { Outlet } from "react-router-dom";
import useApiProducts from "../api-products/useApiProducts";

function RecommendationList() {
  const { data, getData } = useApiProducts();
  useEffect(() => {
    getData();
  }, []);

  const products = data.map((r) => (
    <RecommendationCard
      picture={r.imagenes[0].url}
      key={r.id}
      title={r.titulo}
      category={r.categoria.titulo}
      location={r.ciudad.ciudad}
      description={r.descripcion}
      id={r.id}
    />
  ));

  console.log(data);
  return (
    <>
      <section className={styles.recommendationsBackground}>
        <div className={styles.recommendationsBlock}>
          <h2>Recomendaciones</h2>
          <div className={styles.recommendationsContainer}>{products}</div>
        </div>
      </section>
      <Outlet />
    </>
  );
}

export default RecommendationList;
