import React from "react";
//Components

import HomePageBody from "../../components/homePageBody/home-page-body.component";
import { Parallax } from "react-parallax";
//Styles
import {
  InsideParallaxDiv,
  ParallaxImageDiv,
  Header,
  StyledH1,
  CursoButton,
  RegisterButton
} from "./homepage.styles";

const HomePage = props => {
  return (
    <div id="page-wrapper">
      <Header>
        <Parallax
          blur={{ min: -45, max: 15 }}
          bgImage={process.env.PUBLIC_URL + "/assets/agora3d.png"}
          bgImageAlt="the dog"
          strength={500}
        >
          <ParallaxImageDiv />

          <InsideParallaxDiv>
            <StyledH1>Agora3d</StyledH1>
            <p>Escuela de modelado 3d</p>
            <CursoButton>Ver Cursos</CursoButton>
            <RegisterButton>Crea tu cuenta </RegisterButton>
          </InsideParallaxDiv>
        </Parallax>
      </Header>
      <HomePageBody />
    </div>
  );
};

export default HomePage;
