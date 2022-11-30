import React, {useEffect} from "react";
import axios from "axios";




const baseUrl = "https://api.mymappi.com";
const token = "bbeadbd0-61d4-4d81-9831-d0f9ba11e6ef&q";

function useApiMaps() {

  const [info, setInfo] = React.useState([]);
  
  const getInfo = async () => {
    const response = await axios.get(`${baseUrl}/v2/geocoding/direct?apikey=${token}=JVA%2C%20Av.%20Col%C3%B3n%201643%2C%20B7600%20Mar%20del%20Plata%2C%20Provincia%20de%20Buenos%20Aires%2C%20Argentina`);
    setInfo(response.data);
    
  };
  useEffect(() => {
    getInfo();
  }, []);
    
  

  
  return{info, getInfo}
  

   
};

export default useApiMaps;
