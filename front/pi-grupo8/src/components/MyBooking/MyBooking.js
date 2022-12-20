import React , {useEffect} from "react";
import stylesBooking from "../../Styles/myBookingCard.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faWifi } from "@fortawesome/free-solid-svg-icons";
import { faSwimmer } from "@fortawesome/free-solid-svg-icons";
import { useParams } from "react-router-dom";
import { useAuthContext } from "../../hooks/useAuthContext";

function MyBooking(props) {
    useEffect(()=>{
        
        // eslint-disable-next-line
    },[])
    let { userId } = useParams();
    console.log(userId)
    const { user } = useAuthContext();
    console.log(user);
    

  return (
        <div className={stylesBooking.recommendationsBlock}>
            <div className={stylesBooking.recommendationCard}>
            <div className={stylesBooking.recommendationImg}>
                <img src alt="hotel room" />
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
                    <span className={stylesBooking.recommendationMap}>MOSTRAR EN EL MAPA</span>
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
                <button>
                    
                </button>
                </div>
            </div>
            </div>
        </div>
  );
}

export default MyBooking;