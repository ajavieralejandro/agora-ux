import React, { useState, useEffect } from "react";

//Components

import HomePageBody from "../../components/homePageBody/home-page-body.component";
import { Parallax } from "react-parallax";
import Container from "@material-ui/core/Container";
import Slide from "@material-ui/core/Slide";
import { setHomePage } from "../../redux/collections/navigation/navigation.actions";
import { connect } from "react-redux";
import { default as Search } from "../../components/search/search.component";

//Styles
import {
  InsideParallaxDiv,
  ParallaxImageDiv,
  Header,
  StyledH1,
  CursoButton,
  RegisterButton,
  MarginDiv,
  Black
} from "./homepage.styles";

import "./homepage.styles";

const HomePage = ({ setHomePage }) => {
  const [checked, setChecked] = React.useState(true);

  useEffect(() => {
    return () => {
      console.log("will unmount");
      setHomePage(false);
    };
  }, []);
  useEffect(() => {
    setHomePage(true);
  });

  return (
    <div id="page-wrapper">
      <Header>
        <div className="gradient">
          <Container>
            <MarginDiv>
              <Parallax
                blur={{ min: -45, max: 15 }}
                bgImage={process.env.PUBLIC_URL + "/assets/parallax.png"}
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
                    <StyledH1>Agora3D</StyledH1>
                    <p>Escuela de modelado 3d</p>
                    <CursoButton>Ver Cursos</CursoButton>
                    <RegisterButton>Crea tu cuenta </RegisterButton>
                  </InsideParallaxDiv>
                </Slide>
              </Parallax>
            </MarginDiv>
          </Container>
        </div>
      </Header>
      <Black>
        <HomePageBody />
      </Black>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  setHomePage: state => dispatch(setHomePage(state))
});

export default connect(null, mapDispatchToProps)(HomePage);
