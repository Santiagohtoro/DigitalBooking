import React from "react";
import styles from "../Styles/menuMobile.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SocialMedia from "./SocialMedia";
import { useLogOut } from "../hooks/useLogOut";

function MenuMobile(props) {
  const { setIsMenuVisible, user } = props;
  const { logOut } = useLogOut();
  const location = useLocation();
  const navigate = useNavigate();

  const closeMenu = () => {
    setIsMenuVisible(false);
  };

  function logout(e) {
    e.preventDefault();
    logOut();
    navigate("/");
  }

  return (
    <div className={styles.container}>
      <div className={styles.containerTop}>
        <span>
          <FontAwesomeIcon icon={faXmark} onClick={closeMenu} />
        </span>
        {user ? (
          <div className={styles.userName}>
            <p>{`${user.name.slice(0, 1)}${user.surname.slice(0, 1)}`}</p>
            <h4>Hola,</h4>
            <h3>{user.name}</h3>
          </div>
        ) : (
          <h4>MENÚ</h4>
        )}
      </div>
      <div className={styles.containerBottom}>
        {user ? (
          <div className={styles.logOut}>
            <p>
              ¿Deseas <span onClick={logout}>cerrar sesión?</span>
            </p>
            <SocialMedia />
          </div>
        ) : (
          <div className={styles.menuOptions}>
            {location.pathname === "/" ? (
              <div>
                <Link to="/register" onClick={closeMenu}>
                  <p>Crear cuenta</p>
                </Link>
                <hr />
                <Link to="/login" onClick={closeMenu}>
                  <p>Iniciar sesión</p>
                </Link>
              </div>
            ) : location.pathname === "/register" ? (
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
