import React from "react";
import axios from "axios";

const baseUrl = "http://ec2-18-217-236-88.us-east-2.compute.amazonaws.com:8081";

const useApiProducts = () => {
  const [data, setData] = React.useState([]);

  const getData = async () => {
    const response = await axios.get(`${baseUrl}/productos/todos`);
    setData(response.data);
  };
  
  return { data, getData, setData };
};

export default useApiProducts;
