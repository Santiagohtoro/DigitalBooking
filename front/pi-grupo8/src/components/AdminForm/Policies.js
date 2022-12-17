import React from "react";
import styles from "../../Styles/adminAttributes.module.scss";

function Policies({ handleChange, values }) {
  return (
    <div className={styles.attributes}>
      <h3>Agregar politicas</h3>
      <div className={styles.background}>
        <div className={styles.container}>
          <label className={styles.options}>
            <input
              className={styles.checkbox}
              type="checkbox"
              value={values.checkIn}
              onChange={handleChange}
              name="checkIn"
            />
            Check in 11:00 hs
          </label>
          <label className={styles.options}>
            <input
              className={styles.checkbox}
              type="checkbox"
              value={values.fumar}
              onChange={handleChange}
              name="fumar"
            />
            No se permite fumar
          </label>
          <label className={styles.options}>
            <input
              className={styles.checkbox}
              type="checkbox"
              value={values.fiestas}
              onChange={handleChange}
              name="fiestas"
            />
            No se permiten fiestas
          </label>
          <label className={styles.options}>
            <input
              className={styles.checkbox}
              type="checkbox"
              value={values.deposito}
              onChange={handleChange}
              name="deposito"
            />
            Se debe realizar deposito de seguridad
          </label>
          <label className={styles.options}>
            <input
              className={styles.checkbox}
              type="checkbox"
              value={values.cancelacion}
              onChange={handleChange}
              name="cancelacion"
            />
            No se permite cancelación anticipada sin costo
          </label>
          <label className={styles.options}>
            <input
              className={styles.checkbox}
              type="checkbox"
              value={values.checkOut}
              onChange={handleChange}
              name="checkOut"
            />
            Check out 10:00 hs
          </label>
        </div>
      </div>
    </div>
  );
}

export default Policies;
