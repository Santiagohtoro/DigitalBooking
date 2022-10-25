import React from "react";
import styles from "../Styles/recommendationCard.module.scss";

function RecommendationCard(props) {
  const { picture } = props;

  return (
    <div className={styles.recommendationCard}>
      <div className={styles.recommendationImg}>
        <img src={picture} alt="hotel room" />
      </div>
      <div className={styles.recommendationInfo}>
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
        <div className={styles.recommendationDescription}>
          <p>
            A 940 del centro <span>MOSTRAR EN EL MAPA</span>
          </p>
          <p className={styles.recommendationComment}>
            American shorthair tabby, for donskoy or american shorthair for
            malkin. Savannah tiger. Devonshire rex ocicat egyptian mau cornish
            rex so kitty. <a href="#">Más...</a>
          </p>
        </div>
        <div className={styles.recommendationButton}>
          <button>Ver más</button>
        </div>
      </div>
    </div>
  );
}

export default RecommendationCard;
