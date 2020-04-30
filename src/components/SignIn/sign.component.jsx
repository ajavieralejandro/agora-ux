import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import FormInput from "../formInput/form-input.component";
import { Block, Container } from "./sign.styles";
const SignIn = ({ signUpStart }) => {
  //Esta es la mejor manera de usar Hooks
  const [userCredentials, setUserCredentials] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const { displayName, password, confirmPassword } = userCredentials;

  const handleSubmit = async event => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("El password no coincide");
      return;
    }
    //signUpStart(userCredentials);
  };

  const handleChange = event => {
    const { name, value } = event.target;
    setUserCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <Container>
      <Block>
        <div className="sign-up">
          <h2 className="title">Ya tengo una Cuenta</h2>
          <form onSubmit={handleSubmit}>
            <FormInput
              type="text"
              name="displayName"
              value={displayName}
              onChange={handleChange}
              label="Nombre de Usuario o mail"
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

            <Button type="submit">Ingresar</Button>
            <Button
              variant="contained"
              color="secondary"
              href="#contained-buttons"
            >
              Ingresar con google
            </Button>
          </form>
        </div>
      </Block>
    </Container>
  );
};

/*
const mapDispatchToProps = dispatch =>({
  signUpStart : user => dispatch(signUpStart(user)),
  checkUserSession : () => dispatch(checkUserSession())
  
})*/

export default SignIn;
