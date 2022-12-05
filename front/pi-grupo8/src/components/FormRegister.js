import React from "react";
import styles from "../Styles/register.module.scss";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faEyeSlash } from "@fortawesome/free-solid-svg-icons";

export default function FormRegister() {
  const [showPassword, setShowPassword] = React.useState(false);

  function onSubmit(e) {
    e.preventDefault();
    alert("formulario enviado");
  }

  function toggleShowPassword() {
    setShowPassword(!showPassword);
  }
  const [setPassword] = React.useState();
  function onChangePassword(e) {
    e.preventDefault();
    setPassword(e.target.value);
    document.getElementById("passInput").classList.remove("wrong");
  }

  /*function onChangePassword(e){
            e.preventDefault()
            setPassword(e.target.value)
            document.getElementById("passInput").classList.remove("wrong")
        }*/

  return (

      <div className={styles.container}>
        <h2 className={styles.title}>Crear cuenta</h2>
        <form onSubmit={onSubmit}>
          <div className={styles.userName}>
            <label className={styles.register}>
              {" "}
              Nombre <input type="text"></input>
            </label>
            <label className={styles.register}>
              {" "}
              Apellido <input type="text"></input>
            </label>
          </div>

          <label className={styles.register}>Correo electrónico</label>
          <input type="email"></input>
          <label className={styles.register}>Contraseña</label>

          <div className={styles.passwordWrapper}>
            <input
              type={showPassword ? "text" : "password"}
              required
              onChange={onChangePassword}
            ></input>
            <i onClick={toggleShowPassword}>
              {showPassword ? (
                <FontAwesomeIcon
                  icon={faEyeSlash}
                  class="icon"
                  style={{ color: "#607D8B" }}
                />
              ) : (
                <FontAwesomeIcon
                  icon={faEye}
                  class="icon"
                  size="lg"
                  style={{ color: "#607D8B" }}
                />
              )}
            </i>
            <label className={styles.register}>Confirmar contraseña</label>
            <input type="password"></input>
          </div>

          <div className={styles.button}>
            <button className={styles.btnRegister} type="submit">
              Crear cuenta
            </button>
          </div>
        </form>

        <p>
          ¿Ya tienes una cuenta?{" "}
          <a className={styles.link} href="#url">
            {" "}
            <nav>
              <Link to="/login">Iniciar sesión</Link>
            </nav>
          </a>
        </p>
      </div>

  );
}
