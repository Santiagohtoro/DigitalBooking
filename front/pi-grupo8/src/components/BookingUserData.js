import React from "react";
import styles from "../Styles/bookingUserData.module.scss";

function BookingUserData() {
  return (
    <div>
      <form className={styles.container}>
        <div className={styles.inputs}>
          <label>
            Nombre
            <input type="text" placeholder="Juan" />
          </label>
          <label>
            Apellido
            <input type="text" placeholder="Pérez" />
          </label>
        </div>
        <div className={styles.inputs}>
          <label>
            Correo electrónico
            <input type="email" placeholder="juanperez@gmail.com" />
          </label>
          <label>
            Ciudad
            <input type="text" className={styles.city} />
          </label>
        </div>
      </form>
    </div>
  );
}

export default BookingUserData;
