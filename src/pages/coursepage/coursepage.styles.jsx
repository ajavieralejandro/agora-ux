import styled from "styled-components";

export const Wrap = styled.div`
  background-color: #1f2e2e;
  color: white;
  border: 2px solid black;
  padding: 10px;
  border-radius: 25px;
  text-align: center;
`;

export const Wrap2 = styled.div`
  margin-top: 7%;
  background-color: black;
  color: white;
  opacity: 0.77;
`;

export const StyledP = styled.p`
  font-size: 15px;
`;

export const ParallaxImageDiv = styled.div`
  height: 400px;
  width: 400px;
`;

export const InsideParallaxDiv = styled.div`
  position: absolute;
  bottom: 90px;
  left: 146px;
  color: #f5f5f5;
  font-family: "Nunito", sans-serif;
  font-size: 38px;
  @media (max-width: 800px) {
    text-align: center;
    position: absolute;
    top: 30%;
    left: 1%;
    transform: translate(-50%, -50%);
  }
`;
