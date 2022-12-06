import React from "react";
import styles from "../../Styles/adminProperty.module.scss";

function Property() {
  return (
    <div className={styles.propertyInfo}>
      <div className={styles.inputs}>
        <div className={styles.input}>
          <label>Nombre de la propiedad</label>
          <input type="text" placeholder="Hotel Hermitage" />
        </div>
        <div className={styles.input}>
          <label>Categoria</label>
          <br />
          <select>
            <option value="">Hotel</option>
            <option value="">Hostel</option>
            <option value="">Bed and Breakfast</option>
            <option value="">Departamentos</option>
          </select>
        </div>
      </div>
      <div className={styles.inputs}>
        <div className={styles.input}>
          <label>Dirección</label>
          <input type="text" placeholder="Av. Colon 1643" />
        </div>
        <div className={styles.input}>
          <label>Ciudad</label>
          <br />
          <select>
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
        <textarea placeholder="Escribir aquí"></textarea>
      </div>
    </div>
  );
}

export default Property;
