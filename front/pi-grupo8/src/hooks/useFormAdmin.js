import { useAuthContext } from "./useAuthContext";
import { useNavigate } from "react-router";
import { useState } from "react";

const useFormAdmin = (validateInfo) => {
  const { user } = useAuthContext();
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
    accesible: false,
    pileta: false,
    wifi: false,
    estacionamiento: false,
    mascotas: false,
    aire: false,
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
            "Content-Type": "application/json",
            Authorization: "Bearer " + user.token,
          },
          body: JSON.stringify(transformedData),
        }
      );

      console.log("hola entré al método del post");
      console.log(response)

      if (!response.created) {
        setIsLoading(false);
        console.log(response)
      }
      if (response.created) {
        setIsLoading(false);
        navigate("/productSuccess");
        console.log(response)
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
      accesible,
      pileta,
      wifi,
      estacionamiento,
      mascotas,
      aire,
    } = values;


    console.log(values.accesible)
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
        "available": isAvailable,
        "politicas": [{

        }],
        "reservas": []
    };


    if (imagen1){
        data.imagenes.push("{titulo: 'img', url: " + imagen1 + "}")
    }

    if (imagen2){
        data.imagenes.push("{titulo: 'img', url: " + imagen2 + "}")
    }

    if (imagen3){
        data.imagenes.push("{titulo: 'img', url: " + imagen3 + "}")
    }

    if (imagen4){
        data.imagenes.push("{titulo: 'img', url: " + imagen4 + "}")
    }

    if (imagen5){
        data.imagenes.push("{titulo: 'img', url: " + imagen5 + "}")
    }

    if (accesible){
        data.caracteristicas.push("{id: 3}")
    }

    if (pileta){
        data.caracteristicas.push("{id: 2}")
    }

    if (aire){
        data.caracteristicas.push("{id: 5}")
    }

    if (wifi){
        data.caracteristicas.push("{id: 1}")
    }

    if (mascotas){
        data.caracteristicas.push("{id: 4}")
    }

    if (estacionamiento){
        data.caracteristicas.push("{id: 7}")
    }

    console.log(data)
    return data;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors(validateInfo(values));
    const transformedData = mapFormValuesForProductCreation(values);
    createProduct(transformedData)
    console.log("hola entré al método del handlesubmit");
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
