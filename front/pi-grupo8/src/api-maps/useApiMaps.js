import React from "react";
import axios from "axios";

const baseUrl = "https://api.mymappi.com";
const token = "bbeadbd0-61d4-4d81-9831-d0f9ba11e6ef&q";

const useApiMaps = () => {
  const [data, setData] = React.useState([]);

  const getData = async () => {
    const response = await axios.get(`${baseUrl}/v2/places/autocomplete?apikey=${token}=museo%20de%20louvre&auto_focus=true`);
    setData(response.data);
  };
  return { data, getData };
};

export default useApiMaps;
