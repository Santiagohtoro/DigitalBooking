import React from "react";
import ProductTitle from "./ProductTitle";
import ProductPolicies from "./ProductPolicies";
import BookingDetail from "./BookingDetail";
import styles from "../Styles/booking.module.scss";
import "react-multi-date-picker/styles/colors/teal.css";
import BookingUserData from "./BookingUserData";
import "react-multi-date-picker/styles/colors/teal.css";
import CalendarBooking from "./CalendarBooking";


function Booking(props) {
  

  console.log(props.value)

  return (
    <div>
      <ProductTitle category="Hotel" title="Hermitage" />
      <h2 className={styles.formTitle}>Completá tus datos</h2>
      <div className={styles.grid}>
        <div className={styles.gridLeft}>
          <BookingUserData />
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
    </div>
  );
}
export default Booking;
