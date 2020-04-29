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
          bgImage="https://mail.google.com/mail/u/0?ui=2&ik=08f31e0677&attid=0.1&permmsgid=msg-f:1665088757554228679&th=171b956729842dc7&view=fimg&realattid=f_k9httyt40&disp=thd&attbid=ANGjdJ8Wq57mxk71y73OuQZE_mWLAOefU50ds4LxFQOfOYO57-vu3qZGBypdYdpTOsDyvVeI7WjqDzomwSjbe7Ib54xri2p6a4kFri8CfRrkchpNKGOMuIKrh8dCzbo&ats=2524608000000&sz=w1440-h789"
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
