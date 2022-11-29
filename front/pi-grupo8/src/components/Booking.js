import React from "react";
import ProductTitle from "./ProductTitle";
import ProductPolicies from "./ProductPolicies";
import BookingDetail from "./BookingDetail";
import styles from "../Styles/booking.module.scss";

import "react-multi-date-picker/styles/colors/teal.css";
import CalendarBooking from "./CalendarBooking";
function Booking(props) {
  

  console.log(props.value)

  return (
    <>
      <ProductTitle category="Hotel" title="Hermitage" />
      <div className={styles.grid}>
        <div className={styles.gridLeft}>Mas informacion
        <div className={styles.calendar}>
          <h3 className={styles.dateTitle}>Fechas disponibles</h3> 
          <div className={styles.alignContent}>
            <CalendarBooking/>
          </div>
        </div>
        </div>
        
        <div className={styles.gridRight}>
          <BookingDetail />
        </div>
        
      </div>
      <ProductPolicies />
    </>
  );
}
export default Booking;
