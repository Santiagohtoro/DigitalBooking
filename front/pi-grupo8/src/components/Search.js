import React, { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import DatePicker, { DateObject } from "react-multi-date-picker";
import Styles from "../Styles/search.module.scss";
import "react-multi-date-picker/styles/colors/teal.css";
import useApiCities from "../api/useApiCities";
import { useMediaQuery } from "../hooks/useScreenSize";
import axios from "axios";

export default function Search() {
  

  function MobileCalendar() {
    let isPageWide = useMediaQuery('(max-width: 570px)');
    
    if(isPageWide){
      return 1
    }else{
      return 2
    }
  }

  const { data, getData } = useApiCities();
  const [city , setCity] = useState();
  console.log(city);
  const onChange = (event)=>{
    const c = event.target.value;
    setCity(c)
  }
  const [values, setValues] = useState([new DateObject()]);
  var date = values.toString();
  const dateSplit = date.split(",");
  const fecha1 = Date.parse(dateSplit[0])
  const fecha2 = Date.parse(dateSplit[1])
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
  
  

  function handleSubmit(){
    if(dateSplit.length>1&& city !== undefined){
      var data = JSON.stringify({
        "fechaInicio": fecha1,
        "fechaFinal": fecha2,
        "ciudad": city
      });
      
      var config = {
        method: 'post',
        url: 'http://ec2-18-217-236-88.us-east-2.compute.amazonaws.com:8081/productos/filter/',
        headers: { 
          'Content-Type': 'application/json'
        },
        data : data
      };
      
      axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
      
    }}

  
  return (

      <section className={Styles.container}>
        <div className={Styles.containerElements}>
          <h1 className={Styles.slogan}>
            Busca ofertas en hoteles, casas y mucho más
          </h1>
          <div className={Styles.containerInputs}>
            <select className={`${Styles.selectCity} ${Styles.select}`} onChange={onChange}>
              <option defaultValue disabled selected>Ciudad</option>
              {data.map((place) => (
                <option className={Styles.optionCity} key={place.id} value={place.ciudad}>
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
              format="DD/MM/YY"
              range
              numberOfMonths={MobileCalendar()}
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
            onClick={handleSubmit}></input>
          </div>
        </div>
      </section>

  );
}
