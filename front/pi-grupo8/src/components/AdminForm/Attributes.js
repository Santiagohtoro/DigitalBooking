import React from "react";
import styles from "../../Styles/adminAttributes.module.scss";

function Attributes() {
  return (
    <div className={styles.attributes}>
      <h3>Agregar atributos</h3>
      <div className={styles.background}>
        <div className={styles.container}>
          <label className={styles.options}>
            <input
              className={styles.checkbox}
              type="checkbox"
              value="Televisor"
            />
            Televisor
          </label>
          <label className={styles.options}>
            <input className={styles.checkbox} type="checkbox" value="Pileta" />
            Pileta
          </label>
          <label className={styles.options}>
            <input
              className={styles.checkbox}
              type="checkbox"
              value="Estacionamiento"
            />
            Estacionamiento
          </label>
          <label className={styles.options}>
            <input
              className={styles.checkbox}
              type="checkbox"
              value="Apto mascotas"
            />
            Apto mascotas
          </label>
          <label className={styles.options}>
            <input className={styles.checkbox} type="checkbox" value="Wifi" />
            Wifi
          </label>
          <label className={styles.options}>
            <input
              className={styles.checkbox}
              type="checkbox"
              value="Aire acondicionado"
            />
            Aire acondicionado
          </label>
        </div>
      </div>
    </div>
  );
}

export default Attributes;
