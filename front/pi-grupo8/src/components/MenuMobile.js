import React from "react";
import styles from "../Styles/menuMobile.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { Link, useLocation } from "react-router-dom";
import SocialMedia from "./SocialMedia";

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
            <SocialMedia />
          </div>
        ) : (
          <div className={styles.menuOptions}>
            {location.pathname == "/home" ? (
              <div>
                <Link to="/register" onClick={closeMenu}>
                  <p>Crear cuenta</p>
                </Link>
                <hr />
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

            <SocialMedia />
          </div>
        )}
      </div>
    </div>
  );
}

export default MenuMobile;
