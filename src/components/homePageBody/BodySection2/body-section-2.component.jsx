import React from "react";
import { Grid } from "@material-ui/core";
import Container from "@material-ui/core/Container";
import CourseCard from "../../courseCard/course-card.component";
import { Wrap } from "./body-section-2.styles";

const BodySection2 = () => {
  return (
    <Wrap>
      <Container>
        <h1>Explora nuestros cursos : </h1>
        <p>Algunos ejemplos de la oferta de cursos online</p>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          spacing={3}
        >
          <Grid item xs={12} md={3}>
            <CourseCard />
          </Grid>
          <Grid item xs={12} md={3}>
            <CourseCard />
          </Grid>
          <Grid item xs={12} md={3}>
            <CourseCard />
          </Grid>
          <Grid item xs={12} md={3}>
            <CourseCard />
          </Grid>
        </Grid>
      </Container>
    </Wrap>
  );
};

export default BodySection2;
