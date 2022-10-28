import React from "react";
import styles from "../Styles/header.module.scss";
import logo from "../assets/logo 1.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useNavigate, Outlet} from 'react-router-dom'

export default function Header() {
  const navigate = useNavigate()
  function onClick(e){
    e.preventDefault()
    navigate("/login")

  }

  function displayHome(e){
    e.preventDefault()
    navigate("/home")
  }
  return (
    <>
    <header className={styles.header}>
      <div className={styles.container}>
        <img src={logo} alt="Logo" onClick={displayHome}/>
        <p>
          <a className={styles.link} href onClick={displayHome}>
            Sentite como en tu hogar
          </a>
        </p>
      </div>
      <div className={styles.menu}>
        <FontAwesomeIcon icon={faBars} />
      </div>
      <div className={styles.container}>
        <button className={styles.logginButton}>Crear cuenta</button>
        <button className={styles.logginButton} onClick={onClick}>Iniciar sesión</button>
      </div>
    </header>
    <Outlet/>
    </>
  );
}
