import React from "react";
//Components
import SearchButton from "../../components/search/search.component";
import HomePageBody from "../../components/homePageBody/home-page-body.component";
import { Parallax } from "react-parallax";
//Styles
import { InsideParallaxDiv, ParallaxImageDiv, Header } from "./homepage.styles";

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
            <h1>mucho más que una escuela online</h1>
            <SearchButton />
          </InsideParallaxDiv>
        </Parallax>
      </Header>
      <HomePageBody />
    </div>
  );
};

export default HomePage;
