import React from "react";
import styles from "../Styles/menuMobile.module.scss";

function MenuMobile() {
  const isLoggedIn = false;

  return (
    <div className={styles.container}>
      <div className={styles.containerTop}>
        <span>X</span>
        {isLoggedIn ? (
          <div className={styles.userName}>
            <p>CR</p>
            <h4>Hola,</h4>
            <h3>Celina Rojas</h3>
          </div>
        ) : (
          <h4>MENÚ</h4>
        )}
      </div>
      <div className={styles.containerBottom}>
        {isLoggedIn ? (
          <div className={styles.logOut}>
            <p>
              ¿Deseas <span>cerrar sesión?</span>
            </p>
            <div>Social media</div>
          </div>
        ) : (
          <div className={styles.menuOptions}>
            <div>
              <p>Crear cuenta</p>
              <p>Iniciar sesión</p>
            </div>
            <div>Social media</div>
          </div>
        )}
      </div>
    </div>
  );
}

export default MenuMobile;
