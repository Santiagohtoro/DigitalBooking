import React from "react";
import styles from "../../Styles/adminPolicies.module.scss";

function Attributes() {
  return (
    <div className={styles.policies}>
      <h3>Políticas del producto</h3>
      <div className={styles.container}>
        <div className={styles.policy}>
          <h4>Normas de la casa</h4>
          <p>Descripción</p>
          <textarea
            className={styles.textarea}
            placeholder="Escribir aquí"
          ></textarea>
        </div>
        <div className={styles.policy}>
          <h4>Salud y seguridad</h4>
          <p>Descripción</p>
          <textarea
            className={styles.textarea}
            placeholder="Escribir aquí"
          ></textarea>
        </div>
        <div className={styles.policy}>
          <h4>Política de cancelación</h4>
          <p>Descripción</p>
          <textarea
            className={styles.textarea}
            placeholder="Escribir aquí"
          ></textarea>
        </div>
      </div>
    </div>
  );
}

export default Attributes;
