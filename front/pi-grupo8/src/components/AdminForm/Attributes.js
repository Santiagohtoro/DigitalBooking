import React from "react";
import styles from "../../Styles/adminAttributes.module.scss";

function Attributes({ handleChange, values }) {
  return (
    <div className={styles.attributes}>
      <h3>Agregar atributos</h3>
      <div className={styles.background}>
        <div className={styles.container}>
          <label className={styles.options}>
            <input
              className={styles.checkbox}
              type="checkbox"
              value={values.televisor}
              handleChange={handleChange}
              name="televisor"
            />
            Televisor
          </label>
          <label className={styles.options}>
            <input
              className={styles.checkbox}
              type="checkbox"
              value={values.pileta}
              handleChange={handleChange}
              name="pileta"
            />
            Pileta
          </label>
          <label className={styles.options}>
            <input
              className={styles.checkbox}
              type="checkbox"
              value={values.estacionamiento}
              handleChange={handleChange}
              name="estacionamiento"
            />
            Estacionamiento
          </label>
          <label className={styles.options}>
            <input
              className={styles.checkbox}
              type="checkbox"
              value={values.mascotas}
              handleChange={handleChange}
              name="mascotas"
            />
            Apto mascotas
          </label>
          <label className={styles.options}>
            <input
              className={styles.checkbox}
              type="checkbox"
              value={values.wifi}
              handleChange={handleChange}
              name="wifi"
            />
            Wifi
          </label>
          <label className={styles.options}>
            <input
              className={styles.checkbox}
              type="checkbox"
              value={values.aire}
              handleChange={handleChange}
              name="aire"
            />
            Aire acondicionado
          </label>
        </div>
      </div>
    </div>
  );
}

export default Attributes;
