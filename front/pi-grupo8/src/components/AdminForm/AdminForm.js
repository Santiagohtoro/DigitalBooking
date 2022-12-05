import React from "react";
import styles from "../../Styles/adminForm.module.scss";
import ProductTitle from "../ProductTitle";
import Property from "./Property";
import Attributes from "./Attributes";
import Policies from "./Policies";
import Images from "./Images";

function AdminForm() {
  return (
    <div className={styles.container}>
      <ProductTitle title="Administración" />
      <h2>Crear propiedad</h2>
      <form>
        <div className={styles.formContainer}>
          <Property />
          <Attributes />
          <Policies />
          <Images />
          <button type="submit">Crear</button>
        </div>
      </form>
    </div>
  );
}

export default AdminForm;
