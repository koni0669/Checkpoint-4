import { useNavigate } from "react-router-dom";
import UseLoginForm from "./UseLoginForm";
import "../services/Login.css";

function Login() {
  const navigate = useNavigate();
  const { formValues, formErrors, handleChange, validateInputs } = UseLoginForm(
    {
      username: "",
      password: "",
    }
  );

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateInputs()) {
      return;
    }

    try {
      const response = await fetch("http://localhost:3310/api/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formValues),
      });

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem("token", data.token);
        navigate("/pokeclicker", { replace: true });
      } else {
        console.error("Failed to login", response.status);
        // Display an error message to the user here
      }
    } catch (error) {
      console.error("An error occurred:", error);
      // Display an error message to the user here
    }
  };

  return (
    <form method="post" className="bodyform" id="form" onSubmit={handleSubmit}>
      <div className="inscription-component">
        <h1>Login</h1>
        <label className="Loginlabel">
          <input
            className="input"
            type="text"
            id="username"
            name="username"
            placeholder="Username"
            value={formValues.username}
            onChange={handleChange}
            autoComplete="off"
          />
          {formErrors.username && (
            <div className="error">{formErrors.username}</div>
          )}
        </label>
        <label className="Loginlabel">
          <input
            className="input"
            type="password"
            id="password"
            placeholder="Password"
            name="password"
            value={formValues.password}
            onChange={handleChange}
            autoComplete="new-password"
          />
          {formErrors.password && (
            <div className="error">{formErrors.password}</div>
          )}
        </label>

        <button className="button" id="loginbutton" type="submit">
          Connect
        </button>
      </div>
    </form>
  );
}

export default Login;
