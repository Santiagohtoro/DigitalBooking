import React, {useState} from "react";
import ProductTitle from "./ProductTitle";
import ProductPolicies from "./ProductPolicies";
import BookingDetail from "./BookingDetail";
import styles from "../Styles/booking.module.scss";
import "react-multi-date-picker/styles/colors/teal.css";
import BookingUserData from "./BookingUserData";
import "react-multi-date-picker/styles/colors/teal.css";
import  { Calendar, DateObject } from "react-multi-date-picker";
import calendar from "../Styles/calendar.module.scss";

function Booking(props) {
  const [values, setValues] = useState([]);
    
    
  const weekDays = ["S", "M", "T", "W", "T", "F", "S"];
  const months = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];


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
            <Calendar
              className= {`teal ${calendar.container}` }
              
                value={values}
                onChange={setValues}
                containerStyle="days"
                  range
                  numberOfMonths={2}
                  weekDays={weekDays}
                  months={months}
                  
                  styles={{}}
                
                  
                  disableMonthPicker
                  disableYearPicker
                
                />
            </div>
          </div>
         </div>
          <div className={styles.gridRight}>
            <BookingDetail dates={values}/>
          </div>

        </div>
      <ProductPolicies />
    </div>
  );
}
export default Booking;
