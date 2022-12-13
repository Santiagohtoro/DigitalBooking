import { useAuthContext } from "./useAuthContext";
import validateInfo from "../validators/validateInfoAdmin";
import { useNavigate } from "react-router";
import { useState } from "react";

const useFormAdmin = (validateInfo) => {
  const { user } = useAuthContext();
    console.log("hola");
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
    isAvailable: true,
    televisor: true,
    pileta: true,
    wifi: true,
    estacionamiento: true,
    mascotas: true,
    aire: true,
  });
  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

  const createProduct = async (transformedData) => {
    setIsLoading(true);

    try {
      const response = await fetch(
        "http://ec2-18-217-236-88.us-east-2.compute.amazonaws.com:8081/productos/crear",
        {
          method: "POST",
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers":
              "POST, GET, PUT, DELETE, OPTIONS, HEAD, Authorization, Origin, Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers, Access-Control-Allow-Origin",
            "Content-Type": "application/json",
            Authorization: "Bearer " + user.token,
          },
          body: JSON.stringify(transformedData),
        }
      );

      if (!response.ok) {
        setIsLoading(false);
      }
      if (response.ok) {
        setIsLoading(false);
        navigate("/productSuccess");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const mapFormValuesForProductCreation = (values) => {
    console.log("VALUES MAP FORM: ", values);
    const {
      titulo,
      categoria,
      ciudad,
      imagen1,
      imagen2,
      imagen3,
      imagen4,
      imagen5,
      descripcion,
      isAvailable,
      televisor,
      pileta,
      wifi,
      estacionamiento,
      mascotas,
      aire,
    } = values;

    const data = {
        "titulo": titulo,
        "categoria": {
            "titulo": categoria
        },
        "ciudad": {
        "ciudad": ciudad,
        },
        "imagenes": [],
        "descripcion": descripcion,
        "caracteristicas": [],
        "isAvailable": true,
        "politicas": []
    };


    if (imagen1){
        data.imagenes.push(imagen1)
    }

    if (imagen2){
        data.imagenes.push(imagen2)
    }

    if (imagen3){
        data.imagenes.push(imagen3)
    }

    if (imagen4){
        data.imagenes.push(imagen4)
    }

    if (imagen5){
        data.imagenes.push(imagen5)
    }

    if (televisor){
        data.caracteristicas.push(televisor)
    }

    if (pileta){
        data.caracteristicas.push(televisor)
    }

    if (aire){
        data.caracteristicas.push(televisor)
    }

    if (wifi){
        data.caracteristicas.push(televisor)
    }

    if (mascotas){
        data.caracteristicas.push(televisor)
    }

    if (estacionamiento){
        data.caracteristicas.push(televisor)
    }

    console.log("DATA MAP FORM: ", data)
    return data;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors(validateInfo(values));
    console.log("VALORES ADMIN,", values);
    const transformedData = mapFormValuesForProductCreation(values);
    console.log(transformedData)
    
  };

  
  return {
    handleChange,
    values,
    handleSubmit,
    errors,
    createProduct,
    isLoading,
  };
};

export default useFormAdmin;
