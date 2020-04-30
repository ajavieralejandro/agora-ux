import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import FormInput from "../formInput/form-input.component";
import { Block, Container } from "./register.styles";
const Register = ({ signUpStart }) => {
  //Esta es la mejor manera de usar Hooks
  const [userCredentials, setUserCredentials] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const { displayName, email, password, confirmPassword } = userCredentials;

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
          <h2 className="title">Crea tu cuenta</h2>
          <span>Registrate con tu email y password o tu cuenta de google</span>
          <form onSubmit={handleSubmit}>
            <FormInput
              type="text"
              name="displayName"
              value={displayName}
              onChange={handleChange}
              label="Nombre de Usuario"
              required
            />
            <FormInput
              type="email"
              name="email"
              value={email}
              onChange={handleChange}
              label="Email"
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
            <FormInput
              type="password"
              name="confirmPassword"
              value={confirmPassword}
              onChange={handleChange}
              label="Confirma el Password"
              required
            />
            <Button type="submit">Registrate</Button>
            <Button
              variant="contained"
              color="secondary"
              href="#contained-buttons"
            >
              Registrate con Google
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

export default Register;
