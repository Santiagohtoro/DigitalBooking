import React from "react";
import CategoryCard from "./CategoryCard";
import categories from "../assets/Categories.json";
import styles from "../Styles/categories.module.scss";

function Categories() {
  return (
    <div className={styles.categoriesBlock}>
      <h2>Buscar por tipo de alojamiento</h2>
      <div className={styles.categoriesContainer}>
        {categories.map((c, index) =>
          index < 4 ? (
            <CategoryCard
              key={c.id}
              name={c.category.name}
              amount={c.category.amount}
              picture={c.category.picture}
            />
          ) : null
        )}
      </div>
    </div>
  );
}

export default Categories;
