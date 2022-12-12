import React from "react";
import styles from "../Styles/productPolicies.module.scss";

function ProductPolicies() {
  return (
    <div className={styles.containerPolicy}>
      <div className={styles.containerInfo}>
        <h2>¿Qué tenés que saber?</h2>
        <hr className={styles.line} />
        <section className={styles.policies}>
          <div className={styles.policiesDetail}>
            <h3>Normas de la casa</h3>
            <p>Check-out: 10:00</p>
            <p>No se permiten fiestas</p>
            <p>No fumar</p>
          </div>
          <div className={styles.policiesDetail}>
            <h3>Salud y seguridad</h3>
            <p>
              Se aplican las pautas de distanciamiento social y otras normas
              relacionadas con el coronavirus
            </p>
            <p>Detector de humo</p>
            <p>Depósito de seguridad</p>
          </div>
          <div className={styles.policiesDetail}>
            <h3>Política de cancelación</h3>
            <p>
              Cancelación Flexible: 48hs antes del check-in sin cargo(Exclusivo
              web).
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default ProductPolicies;
