import React from "react";
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
import { useNavigate } from "react-router-dom";
import MapRender from "./MapRender";
import CalendarBooking from "./CalendarBooking";
import Gallery from "./Gallery";
import useApiMaps from "../api/useApiMaps";

function ProductDetail() {
  const { info } = useApiMaps();
  console.log(info);

  const navigate = useNavigate();
  function redirectBooking(e) {
    e.preventDefault();
    navigate("/booking");
  }

  return (
    <>
      <div className={styles.container}>
        <ProductTitle category="Hotel" title="Hermitage" />
        <div className={styles.location}>
          <div className={styles.locationInfo}>
            <div className={styles.locationIcon}>
              <FontAwesomeIcon icon={faLocationDot} />
              <p>Buenos Aires, Ciudad Autónoma de Buenos Aires, Argentina</p>
            </div>
            <span>A 940m del centro</span>
          </div>
        </div>
        <div className={styles.containerDescription}>
          <Gallery />
          <div className={styles.description}>
            <h1>Alójate en el corazón de Buenos Aires</h1>
            <p>
              Himalayan savannah and turkish angora or devonshire rex for
              grimalkin. Himalayan tiger cougar but mouser, but tom. Manx ocicat
              yet siamese kitten. Tom british shorthair donskoy and himalayan
              norwegian forest yet savannah.{" "}
            </p>
            <p>
              Manx persian, kitten egyptian mau so abyssinian so tabby norwegian
              forest. Kitty lynx and ocelot abyssinian so british shorthair,
              lynx. Burmese. Bombay himalayan for havana brown munchkin, for
              savannah yet turkish angora. Bobcat. Maine coon.{" "}
            </p>
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
            <CalendarBooking></CalendarBooking>

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
    </>
  );
}

export default ProductDetail;
