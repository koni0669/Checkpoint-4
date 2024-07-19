import { useNavigate } from "react-router-dom";
import UseSignUpForm from "./UseSignUpForm";
import "../services/SignUp.css";

function SignUp() {
  const navigate = useNavigate();
  const { formValues, formErrors, handleChange, validateInputs } =
    UseSignUpForm({
      username: "",
      email: "",
      password: "",
      password2: "",
    });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateInputs()) {
      console.error("Form validation failed");
      return;
    }

    try {
      const response = await fetch("http://localhost:3310/api/users/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formValues),
      });

      if (response.status === 201) {
        navigate("/login", { state: { user: formValues } });
      } else {
        console.error("Failed to create user", response.status);
        // Vous pouvez afficher un message d'erreur à l'utilisateur ici
      }
    } catch (error) {
      console.error("An error occurred:", error);
      // Vous pouvez afficher un message d'erreur à l'utilisateur ici
    }
  };

  return (
    <form method="post" className="bodyform" id="form" onSubmit={handleSubmit}>
      <div className="inscription-component">
        <h1>Sign Up</h1>
        <label className="signuplabel">
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

        <label className="signuplabel">
          <input
            className="input"
            type="email"
            id="email"
            placeholder="Email"
            name="email"
            value={formValues.email}
            onChange={handleChange}
            autoComplete="off"
          />
          {formErrors.email && <div className="error">{formErrors.email}</div>}
        </label>
        <label className="signuplabel">
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
        <label className="signuplabel">
          <input
            className="input"
            type="password"
            id="password2"
            placeholder="Confirm Password"
            name="password2"
            value={formValues.password2}
            onChange={handleChange}
            autoComplete="new-password"
          />
          {formErrors.password2 && (
            <div className="error">{formErrors.password2}</div>
          )}
        </label>
        <button className="button" id="signupbut" type="submit">
          Next
        </button>
      </div>
    </form>
  );
}

export default SignUp;
