import React from "react";
import styles from "../Styles/bookingDetail.module.scss";
import hotel1 from "../assets/imgs/products/hotels/hotel1.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

function BookingDetail(props) {
  console.log(props.dates);
  return (
    <div className={styles.container}>
      <h3>Detalle de la reserva</h3>
      <div className={styles.card}>
        <div className={styles.img}>
          <img src={hotel1} alt="room" />
        </div>
        <div className={styles.text}>
          <div className={styles.info}>
            <span>Hotel</span>
            <h4>Hermitage Hotel</h4>
            <div className={styles.stars}>
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
            </div>
            <p>
              <FontAwesomeIcon icon={faLocationDot} /> Av.Colón 1643, Buenos
              Aires, Ciudad Autónoma de Buenos Aires, Argentina
            </p>
          </div>
          <div className={styles.dates}>
            <hr />
            <div className={styles.check}>
              <span>Check in</span>
              <span>___/___/___</span>
            </div>
            <hr />
            <div className={styles.check}>
              <span>Check out</span>
              <span>___/___/___</span>
            </div>
            <hr />
          </div>
          <div className={styles.btnContainer}>
            <button className={styles.btn}>Confirmar reserva</button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default BookingDetail;
