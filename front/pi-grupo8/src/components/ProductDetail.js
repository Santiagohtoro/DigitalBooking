import React from "react";
import styles from "../Styles/productDetail.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faKitchenSet } from "@fortawesome/free-solid-svg-icons";
import { faTv } from "@fortawesome/free-solid-svg-icons";
import { faSnowflake } from "@fortawesome/free-solid-svg-icons";
import { faPaw } from "@fortawesome/free-solid-svg-icons";
import { faCar } from "@fortawesome/free-solid-svg-icons";
import { faSwimmer } from "@fortawesome/free-solid-svg-icons";
import { faWifi } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

function ProductDetail() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.name}>
            <p>Hotel</p>
            <h4>Hermitage Hotel</h4>
            <div />
          </div>
          <div>
            <NavLink to="/home" className={styles.icon}>
              <FontAwesomeIcon icon={faChevronLeft} />
            </NavLink>
          </div>
        </div>
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
        <div className={styles.containerPolicy}>
          <div className={styles.containerInfo}>
            <h2>¿Qué tenés que saber?</h2>
            <hr className={styles.line} />
            <section className={styles.policies}>
              <div className={styles.policiesDetail}>
                <h3>Normas de la casa</h3>
                <p>Check-out: 10:00</p>
                <p>No se permiten fiestas</p>
                <p>No fumar</p>
              </div>
              <div className={styles.policiesDetail}>
                <h3>Salud y seguridad</h3>
                <p>
                  Se aplican las pautas de distanciamiento social y otras normas
                  relacionadas con el coronavirus
                </p>
                <p>Detector de humo</p>
                <p>Depósito de seguridad</p>
              </div>
              <div className={styles.policiesDetail}>
                <h3>Política de cancelación</h3>
                <p>
                  Agregá las fechas de tu viaje para obtener los detalles de
                  cancelación de esta estadía.
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductDetail;
