import { useState } from "react";

const useFormLogin = (validateInfo) => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validateInfo(values));
  };

  return { handleChange, values, handleSubmit, errors };
};

export default useFormLogin;
