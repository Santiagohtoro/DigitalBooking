import React, { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import DatePicker, { DateObject } from "react-multi-date-picker";
import Styles from "../Styles/search.module.scss";
import "react-multi-date-picker/styles/colors/teal.css";
import useApiCities from "../api/useApiCities";

export default function Search() {
  const { data, getData } = useApiCities();
  const [values, setValues] = useState([new DateObject()]);
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
  const datePickerRef = useRef();

  useEffect(() => {
    getData();
    // eslint-disable-next-line
  }, []);

  console.log(data);
  return (

      <section className={Styles.container}>
        <div className={Styles.containerElements}>
          <h1 className={Styles.slogan}>
            Busca ofertas en hoteles, casas y mucho más
          </h1>
          <div className={Styles.containerInputs}>
            <select className={`${Styles.selectCity} ${Styles.select}`}>
              {data.map((place) => (
                <option className={Styles.optionCity} key={place.id}>
                  <FontAwesomeIcon icon={faLocationDot} />
                  {place.ciudad},{" "}
                  <span className={Styles.special}> {place.pais}</span>
                </option>
              ))}
            </select>
            <DatePicker
              className="teal"
              inputClass={`${Styles.selectDay} ${Styles.select}`}
              value={values}
              onChange={setValues}
              format="DD MMMM"
              range
              numberOfMonths={2}
              weekDays={weekDays}
              months={months}
              ref={datePickerRef}
              mapDays={({
                date,
                today,
                selectedDate,
                currentMonth,
                isSameDate,
              }) => {
                let props = {};

                props.style = {
                  borderRadius: "100%",
                };

                if (isSameDate(date, today)) props.style.color = "green";
                if (isSameDate(date, selectedDate))
                  props.style = {
                    ...props.style,
                    color: "#1dbeb4",
                    backgroundColor: "#1dbeb4",
                    fontWeight: "bold",
                    border: "1px solid #1dbeb4",
                  };

                return props;
              }}
            >
              {" "}
              <button
                style={{
                  margin: "5px 0",
                  background: "#1dbeb4",
                  borderRadius: "5px",
                  border: "0",
                  height: "40px",
                  width: "175px",
                  color: "white",
                  fontFamily: "roboto",
                  fontWeight: "700",
                }}
                onClick={() => datePickerRef.current.closeCalendar()}
              >
                Aplicar
              </button>
            </DatePicker>
            <input
              className={Styles.search}
              type="submit"
              value="Buscar"
            ></input>
          </div>
        </div>
      </section>

  );
}
