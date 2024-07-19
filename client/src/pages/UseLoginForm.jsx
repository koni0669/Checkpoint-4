import { useState } from "react";

const UseLoginForm = (initialState) => {
  const [formValues, setFormValues] = useState(initialState);
  const [formErrors, setFormErrors] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const setError = (name, message) => {
    setFormErrors((prevErrors) => ({
      ...prevErrors,
      [name]: message,
    }));
  };

  const setSuccess = (name) => {
    setFormErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };

  const validateInputs = () => {
    const { username, password } = formValues;
    const fields = [
      {
        name: "username",
        value: username,
        message: "Username is required",
        minLength: 3,
        errorMessage: "Username must be at least 3 characters long",
      },
      {
        name: "password",
        value: password,
        message: "Password is required",
        minLength: 8,
        errorMessage: "Password must be at least 8 characters long",
      },
    ];

    let allValid = true;

    fields.forEach(({ name, value, message, errorMessage, minLength }) => {
      if (value.trim() === "") {
        setError(name, message);
        allValid = false;
      } else if (minLength && value.length < minLength) {
        setError(name, errorMessage);
        allValid = false;
      } else {
        setSuccess(name);
      }
    });

    return allValid;
  };

  return {
    formValues,
    formErrors,
    handleChange,
    validateInputs,
    setFormValues,
    setFormErrors,
  };
};

export default UseLoginForm;
