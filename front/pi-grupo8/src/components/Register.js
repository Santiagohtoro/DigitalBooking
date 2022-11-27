import React from "react";
import styles from "../Styles/register.module.scss";
import { Link, Outlet } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import validateInfo from "../validators/validateInfoRegister";
import useFormRegister from "../hooks/useFormRegister";

export default function Register() {
  const { handleChange, values, handleSubmit, errors } =
    useFormRegister(validateInfo);
  const [showPassword, setShowPassword] = React.useState(false);

  function toggleShowPassword() {
    setShowPassword(!showPassword);
  }

  console.log(values);
  console.log(errors);

  return (
    <>
      <div className={styles.container}>
        <h2 className={styles.title}>Crear cuenta</h2>

        <form onSubmit={handleSubmit}>
          <div className={styles.userFullName}>
            <label>
              {" "}
              Nombre{" "}
              <input
                type="text"
                name="name"
                defaultValue={values.name}
                onChange={handleChange}
              ></input>
              {errors.name && <span>{errors.name}</span>}
            </label>

            <label>
              {" "}
              Apellido{" "}
              <input
                type="text"
                name="surname"
                defaultValue={values.surname}
                onChange={handleChange}
              ></input>
              {errors.surname && <span>{errors.surname}</span>}
            </label>
          </div>

          <div className={styles.userData}>
            <label>Correo electrónico</label>
            <input
              type="email"
              name="email"
              defaultValue={values.email}
              onChange={handleChange}
            />
            {errors.email && <span>{errors.email}</span>}
          </div>

          <div className={styles.userData}>
            <label className={styles.register}>Contraseña</label>
            <input
              className={styles.password}
              type={showPassword ? "text" : "password"}
              required
              name="password"
              defaultValue={values.password}
              onChange={handleChange}
            />
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
            {errors.password && <span>{errors.password}</span>}
          </div>

          <div className={styles.userData}>
            <label>Confirmar contraseña</label>
            <input
              type="password"
              name="password2"
              defaultValue={values.password2}
              onChange={handleChange}
            />
            {errors.password2 && <span>{errors.password2}</span>}
          </div>

          <div className={styles.btn}>
            <button type="submit">Crear cuenta</button>
            <p>
              ¿Ya tienes una cuenta?{" "}
              <Link className={styles.link} to="/login">
                Iniciar sesión
              </Link>
            </p>
          </div>
        </form>
      </div>

      <Outlet />
    </>
  );
}
