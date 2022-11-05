import React from "react";
import styles from "../Styles/menuMobile.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { faFacebook } from "@fortawesome/free-solid-svg-icons";
import { Link, useLocation } from "react-router-dom";

function MenuMobile(props) {
  const { setIsMenuVisible } = props;
  const location = useLocation();
  console.log(location);

  const isLoggedIn = false;

  const closeMenu = () => {
    setIsMenuVisible(false);
  };

  return (
    <div className={styles.container}>
      <div className={styles.containerTop}>
        <span>
          <FontAwesomeIcon icon={faXmark} onClick={closeMenu} />
        </span>
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
            <div className={styles.logosContainer}>
              <p>F</p>
              <p>T</p>
              <p>I</p>
              <p>L</p>
            </div>
          </div>
        ) : (
          <div className={styles.menuOptions}>
            {location.pathname == "/home" ? (
              <div>
                <Link to="/register" onClick={closeMenu}>
                  <p>Crear cuenta</p>
                </Link>
                <Link to="/login" onClick={closeMenu}>
                  <p>Iniciar sesión</p>
                </Link>
              </div>
            ) : location.pathname == "/register" ? (
              <Link to="/login" onClick={closeMenu}>
                <p>Iniciar sesión</p>
              </Link>
            ) : (
              <Link to="/register" onClick={closeMenu}>
                <p>Crear cuenta</p>
              </Link>
            )}

            <div>Social media</div>
          </div>
        )}
      </div>
    </div>
  );
}

export default MenuMobile;
