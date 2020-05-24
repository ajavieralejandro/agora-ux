import styled from "styled-components";
import Button from "@material-ui/core/Button";

export const ParallaxImageDiv = styled.div`
  height: 600px;
  width: 400px;
`;

export const MarginDiv = styled.div``;

export const Black = styled.div`
  margin-top: -5%;
  background-color: black;
  width  100%;
`;

export const CursoButton = styled.a`
  background-color: #009999;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  &:hover {
    color: #009999;
    background-color: white;
    transition: 0.4s;
  }
`;

export const RegisterButton = styled.a`
  background-color: #005580;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  &:hover {
    background-color: white;
    color: #005580;
    transition: 0.4s;
  }
`;

export const Header = styled.header`
  margin-top: 5.3%;

  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: black;
  width: 100%;
`;

export const StyledH1 = styled.h1`
  color: #f5f5f5;
  font-family: "Nunito", sans-serif;
  font-size: 86px;
  @media (max-width: 800px) {
    font-size: 55px;
  }
`;

export const InsideParallaxDiv = styled.div`
  position: absolute;
  bottom: 290px;
  left: 146px;
  color: #f5f5f5;
  font-family: "Nunito", sans-serif;
  font-size: 18px;
  @media (max-width: 800px) {
    text-align: center;
    position: absolute;
    top: 30%;
    left: 1%;
    transform: translate(-50%, -50%);
  }
`;
