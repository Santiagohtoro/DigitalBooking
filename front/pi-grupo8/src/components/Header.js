import React from "react";
import styles from "../Styles/header.module.scss";
import logo from "../assets/logo 1.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark, faScrewdriverWrench } from "@fortawesome/free-solid-svg-icons";
import { useNavigate, useLocation } from "react-router-dom";
import MenuMobile from "./MenuMobile";
import { useAuthContext } from "../hooks/useAuthContext";
import { useLogOut } from "../hooks/useLogOut";

export default function Header() {
  const [isMenuVisible, setIsMenuVisible] = React.useState(false);
  const location = useLocation();

  const { user } = useAuthContext();
  //console.log(user.role);
  const { logOut } = useLogOut();

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
    window.location.reload()
  }

  function logout(e) {
    e.preventDefault();
    logOut();
    navigate("/");
  }

  function adminPage(e){
    e.preventDefault();
    navigate("/admin");
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
      {!user ? (
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
        <> {user?.role === "ROLE_USER" ? (
        <div className={styles.userNameDesktop}>
          <p>{`${user.name.slice(0, 1)}${user.surname.slice(0, 1)}`}</p>
          <div>
            <h4>Hola,</h4>
            <h3 className={styles.userName}>{user.name}</h3>
          </div>
          <span>
            <FontAwesomeIcon icon={faXmark} onClick={logout} />
          </span>
        </div>
        ) : (
          <div className={styles.userNameDesktop}>
          <p>{`${user.name.slice(0, 1)}${user.surname.slice(0, 1)}`}</p>
          <div>
            <h4>Hola,</h4>
            <h3 className={styles.userName}>{user.name}</h3>
          </div>
          <span>
            <FontAwesomeIcon icon={faScrewdriverWrench} onClick={adminPage}/>
          </span>
          <span>
            <FontAwesomeIcon icon={faXmark} onClick={logout} />
          </span>
        </div>
        )}
        </>
      )}

      {isMenuVisible ? (
        <MenuMobile
          isMenuVisible={isMenuVisible}
          setIsMenuVisible={setIsMenuVisible}
          user={user}
        />
      ) : null}
    </header>
  );
}
