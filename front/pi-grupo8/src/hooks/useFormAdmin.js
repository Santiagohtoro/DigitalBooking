import { useAuthContext } from "./useAuthContext";
import validateInfo from "../validators/validateInfoAdmin";
import { useNavigate } from "react-router";
import {useState} from "react";
import axios from "axios";

const useFormAdmin = (validateInfo) => {
    const {user} = useAuthContext()

    const [isLoading, setIsLoading] = useState(null);
    const [values, setValues] = useState({
      titulo: "",
      categoria: "",
      ciudad: "",
      imagen1: "",
      imagen2: "",
      imagen3: "",
      imagen4: "",
      imagen5: "",
      descripcion: "",
      isAvailable: undefined
    });
    const [errors, setErrors] = useState({});

    const navigate = useNavigate()

    const createProduct = async (values) => {
        setIsLoading(true);
        const response = await fetch(
          "http://ec2-18-217-236-88.us-east-2.compute.amazonaws.com:8081/productos/crear",
          {
            method: "POST",
            headers: { 
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'POST, GET, PUT, DELETE, OPTIONS, HEAD, Authorization, Origin, Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers, Access-Control-Allow-Origin',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer' + user.token
            },
            body: JSON.stringify(values),
          }
        );
        
        if (!response.ok) {
            setIsLoading(false);
          }
          if (response.ok) {
            setIsLoading(false);
            navigate("/productSuccess");
          }
    }

      const handleChange = (e) => {
        const { name, value } = e.target;
        setValues({
          ...values,
          [name]: value,
        });
      };

      const handleSubmit = async (e) => {
        e.preventDefault();
        setErrors(validateInfo(values));
        console.log("VALORES ADMIN,", values);
        await createProduct(values);
      };

      return { handleChange, values, handleSubmit, errors, createProduct, isLoading };

}

export default useFormAdmin;