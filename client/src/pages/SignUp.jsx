import { useNavigate, Form } from "react-router-dom";

import UseSignUpForm from "../hooks/UseSignUpForm";

function SignUp() {
  const navigate = useNavigate();
  const { formValues, formErrors, handleChange, validateInputs } =
    UseSignUpForm({
      username: "",
      email: "",
      password: "",
      password2: "",
    });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateInputs() !== false) {
      navigate("/pokeclicker", { state: { user: formValues } });
    }
  };

  return (
    <Form method="post" className="bodyform" id="form" onSubmit={handleSubmit}>
      <div className="inscription-component">
        <h1>User Sign Up</h1>
        <label className="input-control">
          <input
            className="input container"
            type="text"
            id="username"
            placeholder="Username"
            value={formValues.username}
            onChange={handleChange}
            autoComplete="off"
          />
          {formErrors.username !== "" && (
            <div className="error">{formErrors.username}</div>
          )}
        </label>
        <label className="input-control">
          <input
            className="input container"
            type="email"
            id="email"
            placeholder="Email"
            value={formValues.email}
            onChange={handleChange}
            autoComplete="off"
          />
          {formErrors.email !== "" && (
            <div className="error">{formErrors.email}</div>
          )}
        </label>
        <label className="input-control">
          <input
            className="input container"
            type="password"
            id="password"
            placeholder="Password"
            value={formValues.password}
            onChange={handleChange}
            autoComplete="new-password"
          />
          {formErrors.password !== "" && (
            <div className="error">{formErrors.password}</div>
          )}
        </label>
        <label className="input-control">
          <input
            className="input container"
            type="password"
            id="password2"
            placeholder="Confirm Password"
            value={formValues.password2}
            onChange={handleChange}
            autoComplete="new-password"
          />
          {formErrors.password2 !== "" && (
            <div className="error">{formErrors.password2}</div>
          )}
        </label>
        <input
          type="submit"
          value="Sign Up"
          className="button"
          id="signupbut"
        />
      </div>
    </Form>
  );
}

export default SignUp;
