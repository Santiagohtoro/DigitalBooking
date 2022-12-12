import React from "react";
import ProductTitle from "./ProductTitle";
import ProductPolicies from "./ProductPolicies";
import BookingDetail from "./BookingDetail";
import CheckInHours from "./CheckInHours";
import styles from "../Styles/booking.module.scss";
import { Calendar, DateObject } from "react-multi-date-picker";
import calendar from "../Styles/calendar.module.scss";
import { useState, useEffect } from "react";
import BookingUserData from "./BookingUserData";
import "react-multi-date-picker/styles/colors/teal.css";
import "react-multi-date-picker/styles/colors/teal.css";
import { useMediaQuery } from "../hooks/useScreenSize";
import { useParams } from "react-router";
import useApiProductDetails from "../api/useApiProductDetails";
import { useAuthContext } from "../hooks/useAuthContext";

function Booking() {
  function MobileCalendar() {
    let isPageWide = useMediaQuery("(max-width: 570px)");

    if (isPageWide) {
      return 1;
    } else {
      return 2;
    }
  }

  const [value, setValue] = useState(new DateObject());
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
  var date = value.toString();
  let { id } = useParams();

  const { user } = useAuthContext();
  console.log(user);

  const { data, getData } = useApiProductDetails(id);
  useEffect(() => {
    getData();
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <ProductTitle category={data?.categoria?.titulo} title={data?.titulo} />
      <h2 className={styles.formTitle}>Completá tus datos</h2>
      <div className={styles.grid}>
        <div className={styles.gridLeft}>
          <BookingUserData />
          <div className={styles.calendar}>
            <h3 className={styles.dateTitle}>Fechas disponibles</h3>
            <div className={styles.alignContent}>
              <Calendar
                className={`teal ${calendar.container}`}
                value={value}
                onChange={setValue}
                containerStyle="days"
                range
                format="DD/MM/YY"
                numberOfMonths={MobileCalendar()}
                weekDays={weekDays}
                months={months}
                styles={{}}
                disableMonthPicker
                disableYearPicker
              />
            </div>
            <h2 className={styles.checkInTitle}>Tu horario de llegada</h2>
            <CheckInHours />
          </div>
        </div>
        <div className={styles.gridRight}>
          <BookingDetail
            value={date}
            title={data?.titulo}
            category={data?.categoria?.titulo}
            city={data?.ciudad?.ciudad}
            country={data?.ciudad?.pais}
            imgs={data?.imagenes}
            productId={id}
            contextUser={user}
          />
        </div>
      </div>
      <ProductPolicies />
    </div>
  );
}
export default Booking;
