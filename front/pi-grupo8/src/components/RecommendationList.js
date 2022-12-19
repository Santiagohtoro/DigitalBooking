import React, { useEffect ,useState } from "react";
import RecommendationCard from "./RecommendationCard";
import styles from "../Styles/recommendationList.module.scss";
import useApiProducts from "../api/useApiProducts";
import axios from "axios";
function RecommendationList(props) {
  const {location, dateBooking} = props;
  console.log( "recomendationList", props)
  const [info, setinfo] = useState()
  const { data, getData } = useApiProducts();
  
  useEffect(() => {
    getData()
    // eslint-disable-next-line
  }, []);

  
console.log(info, "info");
    useEffect(()=>{
      if(dateBooking !== undefined || location !== undefined ){
        var values = JSON.stringify({
          "fechaInicio": dateBooking[0],
          "fechaFinal": dateBooking[1],
          "ciudad": location
        });
        var config = {
          method: 'post',
          url: 'http://ec2-18-217-236-88.us-east-2.compute.amazonaws.com:8081/productos/filter/',
          headers: { 
            'Content-Type': 'application/json'
          },
          data : values
        };
        axios(config)
        .then(function (response) {
          console.log(response.data);
          setinfo(response.data)
        })
        .catch(function (error) {
          console.log(error);
        });
        
      }
    },[])
    

  
  return (
 
      <section className={styles.recommendationsBackground}>
        <div className={styles.recommendationsBlock}>
          <h2>Recomendaciones</h2>
          <div className={styles.recommendationsContainer}>{data?.map((r) => (
            <RecommendationCard
              picture={r.imagenes.length ? (r.imagenes[0].url) : "https://cf.bstatic.com/xdata/images/hotel/max1024x768/184305239.jpg?k=2d22fe63ae1f8960e057238c98fb436f7bd9f65854e3a5e918607c5cfa1d0a52&o=&hp=1"}
              key={r.id}
              title={r.titulo}
              category={r.categoria.titulo}
              location={r.ciudad.ciudad}
              description={r.descripcion}
              id={r.id}
            />))}
          </div>
        </div>
      </section>

  );
}

export default RecommendationList;
