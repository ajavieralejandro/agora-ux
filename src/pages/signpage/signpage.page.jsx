import React, { useEffect } from "react";
import Register from "../../components/Register/register.component";
import Grid from "@material-ui/core/Grid";
import SignIn from "../../components/SignIn/sign.component";
import Container from "@material-ui/core/Container";

import {
  PageWrapper,
  RegisterButton,
  InsideParallaxDiv,
  ParallaxImageDiv
} from "./signpage.styles";
import { Parallax } from "react-parallax";

const SignPage = () => {
  return (
    <PageWrapper>
      <Container>
        <Parallax
          blur={{ min: -45, max: 15 }}
          bgImage={process.env.PUBLIC_URL + "/assets/3dprinter.jpg"}
          bgImageAlt="the dog"
          strength={500}
        >
          <ParallaxImageDiv />
          <InsideParallaxDiv>
            <Register />
          </InsideParallaxDiv>
        </Parallax>
      </Container>
    </PageWrapper>
  );
};

export default SignPage;
