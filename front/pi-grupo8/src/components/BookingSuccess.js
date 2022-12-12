import React from "react";
import styles from "../Styles/bookingSuccess.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

function BookingSuccess() {
  const navigate = useNavigate();
  const handleSubmit = () => {
    navigate("/");
  };

  return (
    <div className={styles.container}>
      <div className={styles.bookingContainer}>
        <div className={styles.icons}>
          <FontAwesomeIcon icon={faCircleCheck} className={styles.faCheck} />
        </div>
        <h1>¡Muchas gracias!</h1>
        <p>Su reserva se ha realizado con éxito</p>
        <button onClick={handleSubmit}>Ok</button>
      </div>
    </div>
  );
}

export default BookingSuccess;
