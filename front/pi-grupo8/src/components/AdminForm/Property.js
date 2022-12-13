import React from "react";
import styles from "../../Styles/adminProperty.module.scss";

function Property({handleChange, values}) {
  return (
    <div className={styles.propertyInfo}>
      <div className={styles.inputs}>
        <div className={styles.input}>
          <label>Nombre de la propiedad</label>
          <input type="text" placeholder="Hotel Hermitage" name="titulo" onChange={handleChange} value={values.titulo}/>
        </div>
        <div className={styles.input}>
          <label>Categoria</label>
          <br />
          <select name="categoria" onChange={handleChange} value={values.categoria}>
            <option value="Hotel">Hotel</option>
            <option value="Hostel">Hostel</option>
            <option value="Bed and Breakfast">Bed and Breakfast</option>
            <option value="Departamentos">Departamentos</option>
          </select>
        </div>
      </div>
      <div className={styles.inputs}>
        <div className={styles.input}>
          <label>Dirección</label>
          <input type="text" placeholder="Av. Colon 1643" name="direccion" onChange={handleChange}/>
        </div>
        <div className={styles.input}>
          <label>Ciudad</label>
          <br />
          <select name="ciudad" onChange={handleChange} value={values.ciudad}>
            <option value="Córdoba">Córdoba</option>
            <option value="Mendoza">Mendoza</option>
            <option value="Buenos Aires">Buenos Aires</option>
            <option value="Medellin">Medellin</option>
            <option value="San Carlos de Bariloche">
              San Carlos de Bariloche
            </option>
          </select>
        </div>
      </div>
      <div className={styles.description}>
        <label>Descripción</label>
        <br />
        <textarea placeholder="Escribir aquí" name="descripcion" onChange={handleChange} value={values.descripcion}></textarea>
      </div>
    </div>
  );
}

export default Property;
