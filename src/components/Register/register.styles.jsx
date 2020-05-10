import styled from "styled-components";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

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

export const RegisterButton = styled(Link)`
  background-color: #005580;
  border: 0.5px solid #005580;
  border-radius: 7px;
  color: white;
  padding: 5px 15px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 12px;
  margin: 4px 2px;
  cursor: pointer;
  &:hover {
    border: 0.5px solid black;
    color: black;
    transition: 0.4s;
  }
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
