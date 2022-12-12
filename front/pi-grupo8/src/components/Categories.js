import React, { useEffect, useState } from "react";
import CategoryCard from "./CategoryCard";
import styles from "../Styles/categories.module.scss";
import { Outlet } from "react-router-dom";
import useCategoriesApi from "../api/useCategoriesApi";
import axios from "axios";

function Categories() {
  const { data, getData } = useCategoriesApi();
  const [categoria, setCategoria] = useState();
  let config = {
    method: 'get',
    url: `http://localhost:8081/productos/categoria/${categoria}`,
    headers: { }
  };
  
  axios(config)
  .then((response) => {
    console.log(JSON.stringify(response.data));
  })
  .catch((error) => {
    console.log(error);
  });
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
