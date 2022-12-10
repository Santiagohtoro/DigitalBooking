import React from "react";
import styles from "../Styles/productSuccess.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

function BookingSuccess() {
  return (
    <div className={styles.container}>
      <div className={styles.productContainer}>
        <div className={styles.icons}>
          <FontAwesomeIcon icon={faCircleCheck} className={styles.faCheck} />
        </div>
        <p className={styles.message}>Tu propiedad se ha creado con éxito</p>
        <NavLink to="/">
          <button>Volver</button>
        </NavLink>
      </div>
    </div>
  );
}

export default BookingSuccess;
