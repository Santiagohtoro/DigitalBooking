import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import styles from "../Styles/productTitle.module.scss";

function ProductTitle(props) {
  const { category, title } = props;

  return (
    <div className={styles.header}>
      <div className={styles.name}>
        <p>{category}</p>
        <h4>{title}</h4>
        <div />
      </div>
      <div>
        <NavLink to="/" className={styles.icon}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </NavLink>
      </div>
    </div>
  );
}

export default ProductTitle;
