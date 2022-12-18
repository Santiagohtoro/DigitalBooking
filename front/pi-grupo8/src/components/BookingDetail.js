import React, { useEffect, useState } from "react";
import styles from "../Styles/bookingDetail.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function BookingDetail(props) {
  const [loading, setLoading] = useState(true);
  const [dataProducts, setDataProducts] = useState([]);
  const baseUrl =
    "http://ec2-18-217-236-88.us-east-2.compute.amazonaws.com:8081";

  const date = props.value;
  const dateSplit = date.split(",");

  let { id } = useParams();
  //const { data, getData } = useApiProductDetails(id);
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(`${baseUrl}/productos/${id}`);
        setDataProducts(response.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
    // eslint-disable-next-line
  }, []);

  console.log("PRODUCTOS", dataProducts);

   const [bookingdataProducts, setBookingdataProducts] = useState({
    horaReserva: null,
    fechaInicial: null,
    fechaFin: null,
    producto: {
      id: null,
    },
    user: {
      id: null,
    },
  });
  
  const userID = props?.contextUser?.id;
  console.log(userID);

  useEffect(() => {
    setBookingdataProducts({
      //falta la hora
      fechaInicial: dateSplit[0],
      fechaFin: dateSplit[1],
      producto: {
        id: props.productId,
      },
      user: {
        id: userID,
      },
    });
  }, [dateSplit[0], dateSplit[1], props.productId, userID]);

  console.log("booking data",bookingdataProducts)
  const navigate = useNavigate();

  const createReserva = async (bookingdataProducts) => {
    try {
      const response = await fetch(
        "http://ec2-18-217-236-88.us-east-2.compute.amazonaws.com:8081/reservas/crear",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + props?.contextUser?.token,
            Accept: "application/json",
          },
          body: JSON.stringify(bookingdataProducts),
        }
      );
      console.log(bookingdataProducts);

      if (!response.created) {
        console.log(response);
      }
      if (response.created) {
        navigate("/bookingSuccess");
        console.log(response);
      }
    } catch (err) {
      console.log(err);
    }
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    if(bookingdataProducts.checkOutDate!= null){
      createReserva(bookingdataProducts) 
    }


    
  };

  return !loading ? (
    <div className={styles.container}>
      <h3>Detalle de la reserva</h3>
      <div className={styles.card}>
        <div className={styles.img}>
          <img src={dataProducts.imagenes[0].url} alt="room" />
        </div>
        <div className={styles.text}>
          <div className={styles.info}>
            <span>{dataProducts.categoria.titulo}</span>
            <h4>{dataProducts.titulo}</h4>
            <div className={styles.stars}>
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
            </div>
            <p>
              <FontAwesomeIcon icon={faLocationDot} />{" "}
              {dataProducts.ciudad.ciudad}, {dataProducts.ciudad.pais}
            </p>
          </div>
          <div className={styles.dates}>
            <hr />
            <div className={styles.check}>
              <span>Check in</span>
              <span>{dateSplit[0]}</span>
            </div>
            <hr />
            <div className={styles.check}>
              <span>Check out</span>
              <span>{dateSplit[1]}</span>
            </div>
            <hr />
          </div>
          <div className={styles.btnContainer}>
            <button onClick={handleSubmit} className={styles.btn}>
              Confirmar reserva
            </button>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <></>
  );
}
export default BookingDetail;
