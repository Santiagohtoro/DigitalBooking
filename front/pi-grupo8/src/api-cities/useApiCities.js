import React from "react";
import axios from "axios";

const baseUrl = "http://localhost:8081";

const useApiCities = () => {
  const [data, setData] = React.useState([]);

  const getData = async () => {
    const response = await axios.get(`${baseUrl}/ciudades/todos`);
    setData(response.data);
  };
  
  return { data, getData };
};

export default useApiCities;
