import React from "react";
import styles from "../Styles/recommendationCard.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faWifi } from "@fortawesome/free-solid-svg-icons";
import { faSwimmer } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function RecommendationCard(props) {
  const { picture, title, category, location, id, description } = props;

  return (
    <div className={styles.recommendationCard}>
      <div className={styles.recommendationImg}>
        <img src={picture} alt="hotel room" />
      </div>
      <div className={styles.recommendationInfo}>
        <div className={styles.recommendationText}>
          <div className={styles.recommendationName}>
            <span>{category}</span>
            <span className={styles.stars}>
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
            </span>
            <h2>{title}</h2>
          </div>
          <div className={styles.recommendationRating}>
            <span>8</span>
            <p>Muy bueno</p>
          </div>
        </div>
        <div className={styles.recommendationDescription}>
          <p className={styles.recommendationLocation}>
            <FontAwesomeIcon icon={faLocationDot} />
            <p>{location}</p>
            <span className={styles.recommendationMap}>MOSTRAR EN EL MAPA</span>
          </p>
          <span className={styles.recommendationAmmenities}>
            <FontAwesomeIcon icon={faWifi} />
            <FontAwesomeIcon icon={faSwimmer} />
          </span>
          <p className={styles.recommendationComment}>
            {description}
            <a href="#url">Más...</a>
          </p>
        </div>
        <div className={styles.recommendationButton}>
          <button>
            <Link to={`/product/${id}`}>Ver más</Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default RecommendationCard;
