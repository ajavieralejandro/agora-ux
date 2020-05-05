import styled from "styled-components";
import Button from "@material-ui/core/Button";

export const ParallaxImageDiv = styled.div`
  height: 800px;
  width: 600px;
`;

export const CursoButton = styled.a`
  background-color: whitesmoke;
  border: none;
  color: #1a3300;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  &:hover {
    background-color: #1a3300;
    color: white;
    transition: 0.4s;
  }
`;

export const RegisterButton = styled.a`
  background-color: whitesmoke;
  border: none;
  color: #1a3300;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  &:hover {
    background-color: #1a3300;
    color: white;
    transition: 0.4s;
  }
`;

export const Header = styled.header`
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: black;
  width: 100%;
  margin: 0;
`;

export const StyledH1 = styled.h1`
  color: #f5f5f5;
  font-family: "Nunito", sans-serif;
  font-size: 86px;
`;

export const InsideParallaxDiv = styled.div`
  position: absolute;
  bottom: 290px;
  left: 146px;
  color: #f5f5f5;
  font-family: "Nunito", sans-serif;
  font-size: 18px;
  @media (max-width: 900px) {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;
