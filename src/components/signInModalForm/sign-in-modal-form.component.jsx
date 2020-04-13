import React, { useState } from "react";
import FormInput from "../formInput/form-input.component";
import Button from "@material-ui/core/Button";

const handleSubmit = () => {};

const handleChange = () => {};

const SignInModalForm = () => {
  const [userCredentials, setUserCredentials] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });
  const { displayName, email, password } = userCredentials;
  return (
    <React.Fragment>
      <div>
        <form onSubmit={handleSubmit}>
          <FormInput
            type="text"
            name="displayName"
            value={displayName}
            onChange={handleChange}
            label="Display Name"
            required
          />

          <FormInput
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
            label="Password"
            required
          />

          <Button type="submit">Sign Up</Button>
        </form>
      </div>
    </React.Fragment>
  );
};

export default SignInModalForm;
