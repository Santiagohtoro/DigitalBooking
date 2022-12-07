import { useState } from "react";
import { useAuthContext } from "./useAuthContext";

const useFormRegister = (validateInfo) => {
  const { dispatch } = useAuthContext();
  const [isLoading, setIsLoading] = useState(null);
  const [values, setValues] = useState({
    name: "",
    surname: "",
    email: "",
    password: "",
    city: {},
  });
  const [errors, setErrors] = useState({});

  const signup = async (values) => {
    setIsLoading(true);
    const response = await fetch(
      "http://ec2-18-217-236-88.us-east-2.compute.amazonaws.com:8081/auth/signup",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      }
    );

    const json = await response.json();

    if (!response.ok) {
      setIsLoading(false);
      console.log(response);
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
    console.log("VALORES REGISTRO,", values);
    await signup(values);
  };

  return { handleChange, values, handleSubmit, errors, signup, isLoading };
};

export default useFormRegister;
