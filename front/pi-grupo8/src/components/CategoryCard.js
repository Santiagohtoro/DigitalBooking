import React, { useState } from "react";
import styles from "../Styles/categoryCard.module.scss";


function CategoryCard(props) {
  const { name, picture, amount } = props;
  
  
  return (
    <div className={styles.categoryCard}>
      <div className={styles.categoryCardImg}>
        <img src={picture} alt={name} />
      </div>
      <div className={styles.categoryCardText}>
        <h3>{name}</h3>
        <p>
          {amount} {name}
        </p>
      </div>
    </div>
  );
}

export default CategoryCard;
