import React from "react";
import axios from "axios";

const baseUrl = "http://ec2-18-217-236-88.us-east-2.compute.amazonaws.com:8081";

const useCategoriesApi = () => {
  const [data, setData] = React.useState([]);

  const getData = async () => {
    const response = await axios.get(`${baseUrl}/categorias/todos`);
    setData(response.data);
    console.log(response.status)
  };
  return { data, getData };
};

export default useCategoriesApi;
