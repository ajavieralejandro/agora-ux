import styled from "styled-components";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

export const StyledText = styled(TextField)`
  width: 70%;
`;

export const TextInput = styled(StyledText)`
  margin-top: 12%;
`;

export const Form = styled.form`
  width: 100%;
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  heigth: 100%;
`;

export const Margin5 = styled.div`
  margin-top: 1%;
`;

export const RegisterButton = styled(Button)`
  /* Adapt the colors based on primary prop */
  width: 100%;
  margin-top: 25%;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
`;

export const Block = styled.div`
  display: block;
  width: 60%;
  background-color: white;
  border: none;
  padding: 14px 28px;
  font-size: 16px;
  cursor: pointer;
  text-align: center;
`;
