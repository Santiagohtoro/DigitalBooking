import React from "react";
import { Link } from "react-router-dom";
import styles from "../Styles/login.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import useFormLogin from "../hooks/useFormLogin";
import validateInfo from "../validators/validateInfoLogin";

function Login() {
  const { handleChange, values, handleSubmit, errors, login, isLoading } =
    useFormLogin(validateInfo);
  const [showPassword, setShowPassword] = React.useState(false);

  function toggleShowPassword() {
    setShowPassword(!showPassword);
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.loginTitle}>Iniciar sesión</h2>
      <form className={styles.formLogin} onSubmit={handleSubmit}>
        <label>Correo electrónico</label>
        <input
          type="email"
          required
          id="emailInput"
          name="email"
          defaultValue={values.email}
          onChange={handleChange}
        ></input>
        {errors.email && <span>{errors.email}</span>}
        <label>Contraseña</label>
        <div className={styles.passwordWrapper}>
          <input
            type={showPassword ? "text" : "password"}
            required
            id="passInput"
            name="password"
            defaultValue={values.password}
            onChange={handleChange}
          ></input>
          {errors.password && <span>{errors.password}</span>}
          <i onClick={toggleShowPassword}>
            {showPassword ? (
              <FontAwesomeIcon icon={faEyeSlash} />
            ) : (
              <FontAwesomeIcon icon={faEye} />
            )}
          </i>{" "}
        </div>
        <button className={styles.btnLogin} type="submit">
          Ingresar
        </button>
        <p>
          ¿Aún no tienes cuenta? <Link to="/register">Regístrate</Link>
        </p>
      </form>
    </div>
  );
}

export default Login;
