import React from "react";
import ProductTitle from "./ProductTitle";
import ProductPolicies from "./ProductPolicies";
import BookingDetail from "./BookingDetail";
import styles from "../Styles/booking.module.scss";

function Booking() {
  return (
    <>
      <ProductTitle category="Hotel" title="Hermitage" />
      <div className={styles.grid}>
        <div className={styles.gridLeft}>Más info</div>
        <div className={styles.gridRight}>
          <BookingDetail />
        </div>
      </div>
      <ProductPolicies />
    </>
  );
}
export default Booking;
