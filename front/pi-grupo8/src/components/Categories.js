import React, { useEffect } from "react";
import CategoryCard from "./CategoryCard";
import styles from "../Styles/categories.module.scss";
import { Outlet } from "react-router-dom";
import useCategoriesApi from "../api/useCategoriesApi";

function Categories() {
  const { data, getData } = useCategoriesApi();

  useEffect(() => {
    getData();
    // eslint-disable-next-line
  }, []);

  const categories = data.map((c, index) =>
    index < 4 ? (
      <CategoryCard
        key={c.id}
        name={c.titulo}
        amount="715"
        picture={c.imagen.url}
      />
    ) : null
  );

  return (
    <>
      <div className={styles.categoriesBlock}>
        <h2>Buscar por tipo de alojamiento</h2>
        <div className={styles.categoriesContainer}>{categories}</div>
      </div>
      <Outlet />
    </>
  );
}

export default Categories;
