import { useState } from "react";

const useFormRegister = (validateInfo) => {
  const [values, setValues] = useState({
    name: "",
    surname: "",
    email: "",
    password: "",
    password2: "",
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

export default useFormRegister;
