import React from "react";
import axios from "axios";

const baseUrl = "http://localhost:8080";

const useCategoriesApi = () => {
  const [data, setData] = React.useState([]);

  const getData = async () => {
    const response = await axios.get(`${baseUrl}/categorias/todos`);
    setData(response.data);
  };
  return { data, getData };
};

export default useCategoriesApi;
