import React from "react";
import BodySection1 from "./BodySection1/body-section-1.component";
import BodySection2 from "./BodySection2/body-section-2.component";
import { Wrap, Wrap2, Title } from "./home-page-body.style";

const HomePageBody = () => {
  return (
    <React.Fragment>
      <Wrap2>
        <BodySection2 />
        <BodySection2 />
      </Wrap2>
      <Wrap>
        <Title>Agora3D</Title>
        <p>Escuela lationamericana de biomodelos</p>
      </Wrap>
      <BodySection1 />
    </React.Fragment>
  );
};

export default HomePageBody;
