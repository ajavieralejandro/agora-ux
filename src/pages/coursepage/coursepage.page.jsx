import React from "react";
import Container from "@material-ui/core/Container";
import BuyCourseCard from "../../components/buyCourseCard/buy-course-card.component";
import CoursePageNavigation from "../../components/coursePageNavigation/course-page-navigation.component";
import AvatarDocente from "../../components/avatarDocente/avatar-docente.component";
import Grid from "@material-ui/core/Grid";
import { Wrap } from "./coursepage.styles";
const CoursePage = () => {
  return (
    <Wrap>
      <Container>
        <Grid container>
          <Grid item md={10}>
            <h1>Biomodelos</h1>
            <p>Curso dicado por : Esteban bareiro</p>
            <CoursePageNavigation />
          </Grid>
          <Grid item md={2}>
            <AvatarDocente />
          </Grid>
        </Grid>
        <hr />

        <Grid container>
          <Grid item xs={12} md={8}></Grid>
          <Grid item xs={12} md={4}>
            <BuyCourseCard />
          </Grid>
        </Grid>
      </Container>
    </Wrap>
  );
};

export default CoursePage;
