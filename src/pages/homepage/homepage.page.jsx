import React, { useState } from "react";
//Components

import HomePageBody from "../../components/homePageBody/home-page-body.component";
import { Parallax } from "react-parallax";
import Container from "@material-ui/core/Container";
import Slide from "@material-ui/core/Slide";
import { default as Search } from "../../components/search/search.component";
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
  const [checked, setChecked] = React.useState(true);

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
          <Slide
            direction="up"
            in={checked}
            mountOnEnter
            unmountOnExit
            timeout={600}
          >
            <InsideParallaxDiv>
              <StyledH1>Agora3d</StyledH1>
              <p>Escuela de modelado 3d</p>
              <CursoButton>Ver Cursos</CursoButton>
              <RegisterButton>Crea tu cuenta </RegisterButton>
            </InsideParallaxDiv>
          </Slide>
        </Parallax>
      </Header>
      <HomePageBody />
    </div>
  );
};

export default HomePage;
