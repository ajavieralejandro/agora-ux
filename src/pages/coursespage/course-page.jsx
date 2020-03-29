import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { PageWrapper } from "../signpage/signpage.styles";

const CoursePage = () => {
  return (
    <PageWrapper>
      <Container>
        <Grid container spacing={1}>
          <Grid item xs={12} md={3}>
            <Grid
              container
              direction="column"
              justify="center"
              alignItems="flex-start"
            >
              <div>
                <h1>Categorias de Cursos</h1>
                <hr />
                <p>Impresion 3d</p>
                <p>Diseño Web</p>
                <p>Biomodelos</p>
              </div>
            </Grid>
          </Grid>
          <Grid item xs={12} md={9}></Grid>
        </Grid>
      </Container>
    </PageWrapper>
  );
};

export default CoursePage;
