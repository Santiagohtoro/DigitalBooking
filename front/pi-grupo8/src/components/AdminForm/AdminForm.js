import React from "react";
import styles from "../../Styles/adminForm.module.scss";
import ProductTitle from "../ProductTitle";
import Property from "./Property";
import Attributes from "./Attributes";
import Policies from "./Policies";
import Images from "./Images";
import useFormAdmin from "../../hooks/useFormAdmin";
import validateInfo from "../../validators/validateInfoAdmin";
import axios from "axios";
import { useAuthContext } from "../../hooks/useAuthContext";



function AdminForm() {

  const { handleChange, values, handleSubmit, errors, isLoading } =
    useFormAdmin(validateInfo);
  
  return (
    <div className={styles.container}>
      <ProductTitle title="Administración" />
      <h2>Crear propiedad</h2>
      <form onSubmit={handleSubmit}>
        <div className={styles.formContainer}>
          <Property handleChange={handleChange} values={values}/>
          <Attributes handleChange={handleChange} values={values}/>
          <Policies handleChange={handleChange} values={values}/>
          <Images handleChange={handleChange} values={values}/>
          <button type="submit">Crear</button>
        </div>
      </form >
    </div>
  );
}

export default AdminForm;
