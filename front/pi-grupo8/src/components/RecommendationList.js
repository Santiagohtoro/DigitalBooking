import React, { useEffect } from "react";
import RecommendationCard from "./RecommendationCard";
import styles from "../Styles/recommendationList.module.scss";
import useApiProducts from "../api/useApiProducts";

function RecommendationList() {
  const { data, getData } = useApiProducts();
  useEffect(() => {
    getData();
    // eslint-disable-next-line
  }, []);

  const products = data.map((r) => (
    <RecommendationCard
      picture={r.imagenes.length ? (r.imagenes[0].url) : "https://cf.bstatic.com/xdata/images/hotel/max1024x768/184305239.jpg?k=2d22fe63ae1f8960e057238c98fb436f7bd9f65854e3a5e918607c5cfa1d0a52&o=&hp=1"}
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
 
      <section className={styles.recommendationsBackground}>
        <div className={styles.recommendationsBlock}>
          <h2>Recomendaciones</h2>
          <div className={styles.recommendationsContainer}>{products}</div>
        </div>
      </section>

  );
}

export default RecommendationList;
