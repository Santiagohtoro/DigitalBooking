import React, { useEffect } from "react";
import "../Styles/calendar.css";
import "react-multi-date-picker/styles/colors/teal.css";
import styles from "../Styles/productDetail.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faKitchenSet } from "@fortawesome/free-solid-svg-icons";
import { faTv } from "@fortawesome/free-solid-svg-icons";
import { faSnowflake } from "@fortawesome/free-solid-svg-icons";
import { faPaw } from "@fortawesome/free-solid-svg-icons";
import { faCar } from "@fortawesome/free-solid-svg-icons";
import { faSwimmer } from "@fortawesome/free-solid-svg-icons";
import { faWifi } from "@fortawesome/free-solid-svg-icons";
import ProductTitle from "./ProductTitle";
import ProductPolicies from "./ProductPolicies";
import { useNavigate, useParams } from "react-router-dom";
import MapRender from "./MapRender";
import  { Calendar } from "react-multi-date-picker";
import calendar from "../Styles/calendar.module.scss";
import Gallery from "./Gallery";
import useApiMaps from "../api/useApiMaps";
import useApiProductDetails from "../api/useApiProductDetails";
import { useMediaQuery } from "../hooks/useScreenSize";

function ProductDetail() {
  function MobileCalendar() {
    let isPageWide = useMediaQuery('(max-width: 570px)');
    
    if(isPageWide){
      return 1
    }else{
      return 2
    }
  }
  const { info } = useApiMaps();
  const navigate = useNavigate();
  function redirectBooking(e) {
    e.preventDefault();
    navigate("/booking");
  }

  let { id } = useParams();
  const { data, getData } = useApiProductDetails(id);
  useEffect(() => {
    getData();
    // eslint-disable-next-line
  }, []);

  console.log("INFO", data);
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

      <div className={styles.container}>
        <ProductTitle category={data?.categoria?.titulo} title={data.titulo} />
        <div className={styles.location}>
          <div className={styles.locationInfo}>
            <div className={styles.locationIcon}>
              <FontAwesomeIcon icon={faLocationDot} />
              <p>
                {data?.ciudad?.ciudad}, {data?.ciudad?.pais}
              </p>
            </div>
            <span>A 940m del centro</span>
          </div>
        </div>
        <div className={styles.containerDescription}>
          <Gallery imgs={data?.imagenes} />
          <div className={styles.description}>
            <h1>Alójate en el corazón de {data?.ciudad?.ciudad}</h1>
            <p>{data?.descripcion}</p>
          </div>
        </div>
        <div className={styles.ammenities}>
          <h2>¿Qué ofrece este lugar?</h2>
          <hr />
          <div className={styles.ammenitiesDetails}>
            <div className={styles.ammenitiesIcons}>
              <div className={styles.ammenitiesItems}>
                <FontAwesomeIcon icon={faKitchenSet} className={styles.icon} />
                <span>Cocina</span>
              </div>
              <div className={styles.ammenitiesItems}>
                <FontAwesomeIcon icon={faTv} className={styles.icon} />
                <span>Televisor</span>
              </div>
              <div className={styles.ammenitiesItems}>
                <FontAwesomeIcon icon={faSnowflake} className={styles.icon} />
                <span>Aire acondicionado</span>
              </div>
              <div className={styles.ammenitiesItems}>
                <FontAwesomeIcon icon={faPaw} className={styles.icon} />
                <span>Apto mascotas</span>
              </div>
              <div className={styles.ammenitiesItems}>
                <FontAwesomeIcon icon={faCar} className={styles.icon} />
                <span>Estacionamiento gratuito</span>
              </div>
              <div className={styles.ammenitiesItems}>
                <FontAwesomeIcon icon={faSwimmer} className={styles.icon} />
                <span>Pileta</span>
              </div>
              <div className={styles.ammenitiesItems}>
                <FontAwesomeIcon icon={faWifi} className={styles.icon} />
                <span>Wifi</span>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.calendar}>
          <h3 className={styles.dateTitle}>Fechas disponibles</h3>
          <div className={styles.alignContent}>
          <Calendar
            className= {`teal ${calendar.container}` }
            
            
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

            <div className={styles.bookingContainer}>
              <h5 className={styles.textBooking}>
                Agregá tus fechas de viaje para obtener precios exactos
              </h5>
              <button
                className={styles.buttonBooking}
                onClick={redirectBooking}
              >
                Iniciar reservas
              </button>
            </div>
          </div>
        </div>
        <div className={styles.containerMap}>
          <section className={styles.titleMap}>
            <h2>¿Donde vas a estar?</h2>
            <hr />
          </section>
          <MapRender information={info} />
        </div>
        <ProductPolicies />
      </div>
    
  );
}

export default ProductDetail;
