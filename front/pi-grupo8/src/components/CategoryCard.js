import React from "react";
import stylescardscat from "../styles/categoryCard.module.scss";


function CategoryCard(props) {
  const { name, picture, amount } = props;
  
  
  return (
    <div className={stylescardscat.categoryCard}>
      <div className={stylescardscat.categoryCardImg}>
        <img src={picture} alt={name} />
      </div>
      <div className={stylescardscat.categoryCardText}>
        <h3>{name}</h3>
        <p>
          {amount} {name}
        </p>
      </div>
    </div>
  );
}

export default CategoryCard;
