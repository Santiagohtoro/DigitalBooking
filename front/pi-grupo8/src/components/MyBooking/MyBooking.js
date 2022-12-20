import React, { useEffect, useState } from "react";
import stylesBooking from "../../Styles/myBookingCard.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faWifi } from "@fortawesome/free-solid-svg-icons";
import { faSwimmer } from "@fortawesome/free-solid-svg-icons";
import { useParams } from "react-router-dom";
import { useAuthContext } from "../../hooks/useAuthContext";
import axios from "axios";

function MyBooking(props) {
  let { userId } = useParams();
  const { user } = useAuthContext();
  const [data, setData] = useState([]);

  const getData = async () => {
    const response = await axios.get(
      `http://ec2-18-217-236-88.us-east-2.compute.amazonaws.com:8081/reservas/todos`,
      {
        headers: {
          Authorization: "Bearer " + user?.token,
        },
      }
    );
    setData(response.data);
  };

  useEffect(() => {
    getData();
    // eslint-disable-next-line
  }, [user]);

  console.log("DATA", data);

  function bookings(data) {
    data?.map((b) => {
      return b?.user?.id == userId ? (
        <div className={stylesBooking.recommendationCard}>
          <div className={stylesBooking.recommendationImg}>
            <img src={b?.imagenes?.url} alt={b?.imagenes?.titulo} />
          </div>
          <div className={stylesBooking.recommendationInfo}>
            <div className={stylesBooking.recommendationText}>
              <div className={stylesBooking.recommendationName}>
                <span>category</span>
                <span className={stylesBooking.stars}>
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                </span>
                <h2>title</h2>
              </div>
              <div className={stylesBooking.recommendationRating}>
                <span>8</span>
                <p>Muy bueno</p>
              </div>
            </div>
            <div className={stylesBooking.recommendationDescription}>
              <p className={stylesBooking.recommendationLocation}>
                <FontAwesomeIcon icon={faLocationDot} />
                <p>location</p>
                <span className={stylesBooking.recommendationMap}>
                  MOSTRAR EN EL MAPA
                </span>
              </p>
              <span className={stylesBooking.recommendationAmmenities}>
                <FontAwesomeIcon icon={faWifi} />
                <FontAwesomeIcon icon={faSwimmer} />
              </span>
              <p className={stylesBooking.recommendationComment}>
                description
                <a href="#url">Más...</a>
              </p>
            </div>
            <div className={stylesBooking.recommendationButton}>
              <button></button>
            </div>
          </div>
        </div>
      ) : (
        console.log("no hay datos")
      );
    });
  }

  return (
    <div className={stylesBooking.recommendationsBlock}>{bookings(data)}</div>
  );
}

export default MyBooking;
