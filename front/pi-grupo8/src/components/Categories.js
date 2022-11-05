import React, { useEffect } from "react";
import CategoryCard from "./CategoryCard";
import categories from "../assets/Categories.json";
import styles from "../Styles/categories.module.scss";
import { Outlet } from "react-router-dom";
import useCategoriesApi from "../api/useCategoriesApi";

function Categories() {
  const { data, getData } = useCategoriesApi();

  React.useEffect(() => {
    getData();
  }, []);

  console.log(data);

  return (
    <>
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
      <Outlet />
    </>
  );
}

export default Categories;
