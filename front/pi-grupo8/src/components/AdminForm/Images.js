import React from "react";
import styles from "../../Styles/adminImages.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquarePlus } from "@fortawesome/free-solid-svg-icons";

function Attributes() {
  return (
    <div className={styles.images}>
      <h3>Cargar imágenes</h3>
      <div className={styles.container}>
        <div className={styles.inputContainer}>
          <input
            className={styles.input}
            type="text"
            placeholder="Insertar https://"
          />
          <FontAwesomeIcon icon={faSquarePlus} className={styles.icon} />
        </div>
      </div>
    </div>
  );
}

export default Attributes;
