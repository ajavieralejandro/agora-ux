import React from "react";
import Container from "@material-ui/core/Container";
import BuyCourseCard from "../../components/buyCourseCard/buy-course-card.component";
import { Wrap } from "./coursepage.styles";
const CoursePage = () => {
  return (
    <Wrap>
      <Container>
        <h1>Biomodelos</h1>
        <p>Curso dicado por : Esteban bareiro</p>
        <hr />
        <BuyCourseCard />
      </Container>
    </Wrap>
  );
};

export default CoursePage;
