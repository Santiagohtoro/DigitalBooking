import React from "react";
import styles from "../Styles/recommendationCard.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faWifi } from "@fortawesome/free-solid-svg-icons";
import { faSwimmer } from "@fortawesome/free-solid-svg-icons";

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
            <span className={styles.stars}>
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
            </span>
            <h2>Hermitage Hotel</h2>
          </div>
          <div className={styles.recommendationRating}>
            <span>8</span>
            <p>Muy bueno</p>
          </div>
        </div>
        <div className={styles.recommendationDescription}>
          <p className={styles.recommendationLocation}>
            <FontAwesomeIcon icon={faLocationDot} />
            <p>A 940 del centro</p>
            <span className={styles.recommendationMap}>MOSTRAR EN EL MAPA</span>
          </p>
          <span className={styles.recommendationAmmenities}>
            <FontAwesomeIcon icon={faWifi} />
            <FontAwesomeIcon icon={faSwimmer} />
          </span>
          <p className={styles.recommendationComment}>
            American shorthair tabby, for donskoy or american shorthair for
            malkin. Savannah tiger. Devonshire rex ocicat egyptian mau cornish
            rex so kitty. <a href="#url">Más...</a>
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
