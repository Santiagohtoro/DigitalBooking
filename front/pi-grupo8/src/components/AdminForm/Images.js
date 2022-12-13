import React from "react";
import styles from "../../Styles/adminImages.module.scss";

function Images({ handleChange, values }) {
  return (
    <div className={styles.images}>
      <h3>Cargar imágenes</h3>
      <div className={styles.container}>
        <div className={styles.inputContainer}>
          <input
            name="imagen1"
            value={values.imagen1}
            onChange={handleChange}
            className={styles.input}
            type="text"
            placeholder="Insertar https://"
          />
          <input
            name="imagen2"
            value={values.imagen2}
            onChange={handleChange}
            className={styles.input}
            type="text"
            placeholder="Insertar https://"
          />
          <input
            name="imagen3"
            value={values.imagen3}
            onChange={handleChange}
            className={styles.input}
            type="text"
            placeholder="Insertar https://"
          />
          <input
            name="imagen4"
            value={values.imagen4}
            onChange={handleChange}
            className={styles.input}
            type="text"
            placeholder="Insertar https://"
          />
          <input
            name="imagen5"
            value={values.imagen5}
            onChange={handleChange}
            className={styles.input}
            type="text"
            placeholder="Insertar https://"
          />
        </div>
      </div>
    </div>
  );
}

export default Images;
