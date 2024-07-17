import { useState, navigate } from "react";

const UseSignUpForm = (initialState) => {
  const [formValues, setFormValues] = useState(initialState);
  const [formErrors, setFormErrors] = useState({
    username: "",
    email: "",
    password: "",
    password2: "",
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

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const validateInputs = () => {
    const { username, email, password, password2 } = formValues;
    const fields = [
      {
        name: "username",
        value: username,
        message: "Username is required",
        minLength: 3,
        errorMessage: "Username must be at least 3 characters long",
      },
      {
        name: "email",
        value: email,
        message: "Email is required",
        errorMessage: "Email must be at least 3 characters long",
      },
      {
        name: "password",
        value: password,
        message: "Password is required",
        minLength: 8,
        errorMessage: "Password must be at least 6 characters long",
      },
      {
        name: "password2",
        value: password2,
        message: "Password is required",
        minLength: 8,
        errorMessage: "Password must be at least 6 characters long",
      },
    ];
    fields.forEach(({ name, value, message, minLength, errorMessage }) => {
      if (value === "") {
        setError(name, message);
      } else if (value.length < minLength) {
        setError(name, errorMessage);
      } else {
        setSuccess(name);
      }
    });
    if (password !== password2) {
      setError("password2", "Passwords do not match");
    } else {
      setSuccess("password2");
    }
    if (!validateEmail(email)) {
      setError("email", "Provide a valid email address");
    } else {
      setSuccess("email");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateInputs() !== false) {
      navigate("/pokeclicker", { state: { user: formValues } });
    }
  };

  return {
    formValues,
    formErrors,
    handleChange,
    setError,
    setSuccess,
    handleSubmit,
  };
};

export default UseSignUpForm;
