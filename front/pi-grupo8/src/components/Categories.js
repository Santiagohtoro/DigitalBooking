import React, { useEffect} from "react";

import styles from "../Styles/categories.module.scss";
import { Outlet } from "react-router-dom";
import useCategoriesApi from "../api/useCategoriesApi";
//import axios from "axios";
import stylescardscat from "../Styles/categoryCard.module.scss";

function Categories(props) {
  const { data, getData } = useCategoriesApi();
  const {setFilterBy} =props;
  console.log(data)
  // eslint-disable-next-line
  
  
  /*let config = {
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
  });*/
  useEffect(() => {
    getData();
    // eslint-disable-next-line
  }, []);

  const onChange = (event)=>{
    const c = event.target.alt;
    setFilterBy(c);
  }

  return (
    <>
      <div className={styles.categoriesBlock}>
        <h2>Buscar por tipo de alojamiento</h2>
        <div className={styles.categoriesContainer}>
            {data.map((c, index)=>{
              return(<div className={stylescardscat.categoryCard} onClick={onChange} >
                      <div className={stylescardscat.categoryCardImg} >
                        <img src={c?.imagen?.url} alt={c.titulo} />
                      </div>
                      <div className={stylescardscat.categoryCardText}>
                        <h3>{c.titulo}</h3>
                        <p>715 {c.titulo}s</p>
                      </div>
                    </div>)
            })}
        </div>
      </div>
      <Outlet />
    </>
  );
}

export default Categories;
