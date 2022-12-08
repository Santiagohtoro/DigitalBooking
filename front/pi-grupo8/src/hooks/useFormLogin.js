import { useState } from "react";
import { useNavigate } from "react-router";
import { useAuthContext } from "./useAuthContext";

const useFormLogin = (validateInfo) => {
  const { dispatch } = useAuthContext();
  const [isLoading, setIsLoading] = useState(null);
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

  const login = async (values) => {
    setIsLoading(true);

    const response = await fetch(
      "http://ec2-18-217-236-88.us-east-2.compute.amazonaws.com:8081/auth/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      }
    );

    const json = await response.json();
    console.log(json);

    if (!response.ok) {
      setIsLoading(false);
      alert("Credenciales inválidas:");
    }
    if (response.ok) {
      //save the user to local storage
      localStorage.setItem("user", JSON.stringify(json));
      //update the auth context
      dispatch({ type: "LOGIN", payload: json });
      setIsLoading(false);
    }
  };

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
    console.log("VALORES LOGIN,", values);
    await login(values);
    navigate("/");
  };

  return { handleChange, values, handleSubmit, errors, login, isLoading };
};

export default useFormLogin;
