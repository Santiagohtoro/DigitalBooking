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
    checkIn: false,
    fumar: false,
    fiestas: false,
    deposito: false,
    cancelacion: false,
    checkOut: false,
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
            Accept: "application/json",
          },
          body: JSON.stringify(transformedData),
        }
      );
      console.log(transformedData);

      if (!response.created) {
        setIsLoading(false);
        console.log(response);
      }
      if (response.created) {
        setIsLoading(false);
        navigate("/productSuccess");
        console.log(response);
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
      accesible,
      pileta,
      wifi,
      estacionamiento,
      mascotas,
      aire,
      checkIn,
      fumar,
      fiestas,
      deposito,
      cancelacion,
      checkOut,
    } = values;

    /*const data = {
      titulo: "",
      categoria: {
        titulo: categoria,
      },
      ciudad: {
        ciudad: ciudad,
      },
      imagenes: [],
      descripcion: descripcion,
      caracteristicas: [],
      available: isAvailable,
      politicas: [{}],
      reservas: [],
    }; */
    let data = {
      titulo: titulo,
      categoria: {
        
      },
      ciudad: {},
      imagenes: [],
      descripcion: descripcion,
      caracteristicas: [],
      available: true,
      politicas: [],
    };

    //Imagenes
    if (imagen1) {
      data.imagenes.push({ titulo: "img", url: imagen1 });
    }

    if (imagen2) {
      data.imagenes.push({ titulo: "img", url: imagen2 });
    }

    if (imagen3) {
      data.imagenes.push({ titulo: "img", url: imagen3 });
    }

    if (imagen4) {
      data.imagenes.push({ titulo: "img", url: imagen4 });
    }

    if (imagen5) {
      data.imagenes.push({ titulo: "img", url: imagen5 });
    }

    //Caracteristicas
    if (accesible) {
      data.caracteristicas.push({ id: 3 });
    }
    if (pileta) {
      data.caracteristicas.push({ id: 2 });
    }
    if (aire) {
      data.caracteristicas.push({ id: 5 });
    }
    if (wifi) {
      data.caracteristicas.push({ id: 1 });
    }
    if (mascotas) {
      data.caracteristicas.push({ id: 4 });
    }
    if (estacionamiento) {
      data.caracteristicas.push({ id: 7 });
    }

    //Ciudades
    if (ciudad === "Buenos Aires") {
      data.ciudad.id = 1;
    } else if (ciudad === "Mendoza") {
      data.ciudad.id = 2;
    } else if (ciudad === "Cordoba") {
      data.ciudad.id = 3;
    } else if (ciudad === "San Carlos de Bariloche") {
      data.ciudad.id = 4;
    } else {
      data.ciudad.id = 5;
    }

    //Categoria
    if (categoria === "Hotel") {
      data.categoria.id = 1;
    } else if (categoria === "Hostel") {
      data.categoria.id = 2;
    } else if (categoria === "Departamento") {
      data.categoria.id = 3;
    } else if (categoria === "Bed and breakfast") {
      data.categoria.id = 4;
    }

    //Politicas
    if (checkIn) {
      data.politicas.push({ id: 1 });
    }
    if (fumar) {
      data.politicas.push({ id: 2 });
    }
    if (fiestas) {
      data.politicas.push({ id: 3 });
    }
    if (deposito) {
      data.politicas.push({ id: 4 });
    }
    if (cancelacion) {
      data.politicas.push({ id: 5 });
    }
    if (checkOut) {
      data.politicas.push({ id: 7 });
    }

    //console.log(data);
    return data;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors(validateInfo(values));
    const transformedData = mapFormValuesForProductCreation(values);
    createProduct(transformedData);
    console.log("hola entré al método del handlesubmit");
    navigate("/productSuccess");
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
