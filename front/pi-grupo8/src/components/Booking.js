import React from "react";
import ProductTitle from "./ProductTitle";
import ProductPolicies from "./ProductPolicies";
import BookingDetail from "./BookingDetail";
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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import stylesHour from "../Styles/checkIn.module.scss";

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


  //Horas
  const options = [
    { value: "01:00:00", label: "1:00AM" },
    { value: "02:00:00", label: "2:00AM" },
    { value: "03:00:00", label: "3:00AM" },
    { value: "04:00:00", label: "4:00AM" },
    { value: "05:00:00", label: "5:00AM" },
    { value: "06:00:00", label: "6:00AM" },
    { value: "07:00:00", label: "7:00AM" },
    { value: "08:00:00", label: "8:00AM" },
    { value: "09:00:00", label: "9:00AM" },
    { value: "10:00:00", label: "10:00AM" },
    { value: "11:00:00", label: "11:00AM" },
    { value: "12:00:00", label: "12:00PM" },
    { value: "13:00:00", label: "13:00PM" },
    { value: "14:00:00", label: "14:00PM" },
    { value: "15:00:00", label: "15:00PM" },
    { value: "16:00:00", label: "16:00PM" },
    { value: "17:00:00", label: "17:00PM" },
    { value: "18:00:00", label: "18:00PM" },
    { value: "19:00:00", label: "19:00PM" },
    { value: "20:00:00", label: "20:00PM" },
    { value: "21:00:00", label: "21:00PM" },
    { value: "22:00:00", label: "22:00PM" },
    { value: "23:00:00", label: "23:00PM" },
    { value: "24:00:00", label: "24:00PM" },
  ];
  const [hour, setHour] = useState("");

  const handleChange = (e) => {
    setHour({ value: e.target.value, label: e.target.value });
  };
  
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
                format="YYYY-MM-DD"
                numberOfMonths={MobileCalendar()}
                weekDays={weekDays}
                months={months}
                styles={{}}
                disableMonthPicker
                disableYearPicker
              />
            </div>
            <h2 className={styles.checkInTitle}>Tu horario de llegada</h2>

            <div className={stylesHour.container}>
              <div className={stylesHour.info}>
                <FontAwesomeIcon icon={faCheckCircle} />
                <p>
                  Tu habitación va a estar lista para el check-in entre las 10:00 AM y
                  las 11:00 PM
                </p>
              </div>
              <p>Indicá tu horario estimado de llegada</p>
              <select defaultValue={hour} onChange={handleChange}>
                {options.map((option) => (
                  <option value={option.value} key={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

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
            hour = {hour}
          />
        </div>
      </div>
      <ProductPolicies />
    </div>
  );
}
export default Booking;
