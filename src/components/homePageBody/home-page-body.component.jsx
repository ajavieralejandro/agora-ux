import React from "react";
import Grid from "@material-ui/core/Grid";
import BodySection1 from "../BodySection1/body-section-1.component";
import Member from "../member/member.component";
import { Wrap, Title, StyledImage } from "./home-page-body.style";
import CourseImage from "../courseCard/course-card.component";
import SearchButton from "../search/search.component";
import { FaDelicious } from "react-icons/fa";
import Container from "@material-ui/core/Container";
import CourseCard from "../courseCard/course-card.component";

import Paper from "@material-ui/core/Paper";

const HomePageBody = () => {
  return (
    <React.Fragment>
      <Wrap>
        <Title>Agora3D</Title>
        <p>Escuela lationamericana de biomodelos</p>
      </Wrap>
      <BodySection1 />
    </React.Fragment>
  );
};

export default HomePageBody;
