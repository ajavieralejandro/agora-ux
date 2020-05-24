import React from "react";
import Navbar from "../../components/navbar/navbar.component";
import Container from "@material-ui/core/Container";
import BuyCourseCard from "../../components/buyCourseCard/buy-course-card.component";
import CoursePageNavigation from "../../components/coursePageNavigation/course-page-navigation.component";
import ImageResponsive from "react-image-responsive";
import AvatarDocente from "../../components/avatarDocente/avatar-docente.component";
import Grid from "@material-ui/core/Grid";
import ModuleExpansionPanel from "../../components/modulePanel/module-panel.component";
import CourseReviews from "../../components/courseReviews/course-reviews.component";
import {
  Wrap,
  Wrap2,
  StyledP,
  ParallaxImageDiv,
  InsideParallaxDiv
} from "./coursepage.styles";

import { Parallax } from "react-parallax";

const CoursePage = () => {
  return (
    <React.Fragment>
      <Wrap2>
        <Container>
          <Wrap2>
            <Parallax
              blur={{ min: -45, max: 15 }}
              bgImage={process.env.PUBLIC_URL + "/assets/craneo.png"}
              bgImageAlt="the dog"
              strength={500}
            >
              <ParallaxImageDiv />
              <InsideParallaxDiv>
                <p>Biomodelos</p>
              </InsideParallaxDiv>
            </Parallax>
          </Wrap2>

          <hr />

          <Grid container>
            <Grid item xs={12} md={8}>
              <Wrap>
                <Container>
                  <StyledP>
                    El objetivo del curso es posibilitar tanto la lectura de la
                    metadata de las imágenes, como el uso adecuado de software
                    para la segmentación, edición y exportación para impresión
                    3d o renderizado de mallas poligonales y la obtención de
                    modelos tridimensionales basados en las mismas, como valvas
                    para craneoplastía, anclajes quirúrgicos bucomaxilofaciales,
                    implantes mallados, valvas ortopédicas, moldes y objetos
                    para simuladores. El curso está comprendido en 6 encuentros
                    online de 3 hs reloj cada uno, en horarios pactados por los
                    estudiantes. Se establece una agenda de cursada a convenir
                    según las necesidades y tiempos del estudiante. Se entregan
                    archivos de torax, para trabaar con distintos tejidos en
                    base a unidades Haunsfield, RMI, TC, escaneos 3d y se
                    preparan los obetos para su correcta impresión 3d y
                    renderizado. EL software a utilizar es de distribución libre
                    y en su mayoría open source y de proveniencia académica:
                    DicomBrowser, ImageJ, Seg3D, InVesalius, Slicer3d, Blender y
                    Meshmixer para realizar limpiezas y reconstrucción. El
                    material de estudios es extenso por lo que es recomendable
                    tener dos clases por semana distanciadas una de otra, o
                    simplemente una sola para poder llevar prácticas personales.
                  </StyledP>

                  <ModuleExpansionPanel />
                  <CourseReviews />
                </Container>
              </Wrap>
            </Grid>
            <Grid item xs={12} md={4}>
              <Container>
                <BuyCourseCard />
              </Container>
            </Grid>
          </Grid>
        </Container>
      </Wrap2>
    </React.Fragment>
  );
};

export default CoursePage;
