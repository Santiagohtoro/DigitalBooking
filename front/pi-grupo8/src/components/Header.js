import React from "react";
import styles from "../Styles/header.module.scss";
import logo from "../assets/logo 1.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useNavigate, useLocation } from "react-router-dom";
import MenuMobile from "./MenuMobile";

export default function Header() {
  const [isMenuVisible, setIsMenuVisible] = React.useState(false);
  const location = useLocation();

  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  const navigate = useNavigate();
  function onClick(e) {
    e.preventDefault();
    navigate("/login");
  }

  function register(e) {
    e.preventDefault();
    navigate("/register");
  }

  function displayHome(e) {
    e.preventDefault();
    navigate("/");
  }

  function logout(e) {
    e.preventDefault();
    navigate("/");
    setIsLoggedIn(false);
  }

  const handleClick = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  return (
    
      <header className={styles.header}>
        <div className={styles.container}>
          <img src={logo} alt="Logo" onClick={displayHome} />
          <p>
            <a className={styles.link} href onClick={displayHome}>
              Sentite como en tu hogar
            </a>
          </p>
        </div>
        <div className={styles.menu}>
          <FontAwesomeIcon icon={faBars} onClick={handleClick} />
        </div>
        {!isLoggedIn ? (
          <div className={styles.btnContainer}>
            {location.pathname === "/register" ? (
              <button className={styles.logginButton} onClick={onClick}>
                Iniciar sesión
              </button>
            ) : location.pathname === "/login" ? (
              <button className={styles.logginButton} onClick={register}>
                Crear cuenta
              </button>
            ) : (
              <>
                <button className={styles.logginButton} onClick={onClick}>
                  Iniciar sesión
                </button>
                <button className={styles.logginButton} onClick={register}>
                  Crear cuenta
                </button>
              </>
            )}
          </div>
        ) : (
          <div className={styles.userNameDesktop}>
            <p>JP</p>
            <div>
              <h4>Hola,</h4>
              <h3>Juan Perez</h3>
            </div>
            <span>
              <FontAwesomeIcon icon={faXmark} onClick={logout} />
            </span>
          </div>
        )}

        {isMenuVisible ? (
          <MenuMobile
            isMenuVisible={isMenuVisible}
            setIsMenuVisible={setIsMenuVisible}
            isLoggedIn={isLoggedIn}
          />
        ) : null}
      </header>

      
  
  );
}
