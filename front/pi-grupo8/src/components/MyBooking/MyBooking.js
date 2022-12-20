import React, { useEffect, useState } from "react";
import stylesBooking from "../../Styles/myBookingCard.module.scss";
import { useParams } from "react-router-dom";
import { useAuthContext } from "../../hooks/useAuthContext";
import axios from "axios";
import RecommendationCard from "../RecommendationCard";

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

  const bookings = data.filter((r) => r?.user?.id === parseInt(userId));
  console.log(bookings);

  const userBookings = bookings.map((b) => {
    console.log(b?.producto?.imagenes?.url);
    return (
      <RecommendationCard
        key={b?.id}
        picture={
          b?.producto?.imagenes?.length
            ? b?.producto?.imagenes[0]?.url
            : "https://cf.bstatic.com/xdata/images/hotel/max1024x768/184305239.jpg?k=2d22fe63ae1f8960e057238c98fb436f7bd9f65854e3a5e918607c5cfa1d0a52&o=&hp=1"
        }
        title={b?.producto?.titulo}
        category={b?.producto?.categoria?.titulo}
        location={b?.producto?.ciudad?.ciudad}
        id={b?.id}
        description={b?.producto?.descripcion}
      />
    );
  });

  return (
    <div className={stylesBooking.recommendationsBlock}>{userBookings}</div>
  );
}

export default MyBooking;
