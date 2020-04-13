import styled from "styled-components";

export const ParallaxImageDiv = styled.div`
  height: 800px;
  width: 600px;
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

export const InsideParallaxDiv = styled.div`
  position: absolute;
  bottom: 170px;
  left: 146px;
  color: blanchedalmond;
  font-family: "Nunito", sans-serif;
  font-size: 18px;
  @media (max-width: 900px) {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;
