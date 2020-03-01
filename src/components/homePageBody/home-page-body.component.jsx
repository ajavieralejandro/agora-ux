import React from 'react';
import Grid from '@material-ui/core/Grid';
import Member from '../member/member.component';
import {Wrap,Title,StyledImage} from './home-page-body.style';
import CourseImage from '../courseCard/course-card.component';
import SearchButton from '../search/search.component';
import { FaDelicious } from "react-icons/fa";
import Container from '@material-ui/core/Container';
import CourseCard from '../courseCard/course-card.component';

import Paper from '@material-ui/core/Paper';


const HomePageBody = () => {
    return(
        <Wrap>
        <Title>Agora3D</Title>
        <FaDelicious size={44} />
        <p>Escuela lationamericana de biomodelos</p>
        <Grid container spacing={4}>
        <Grid item xs={12} md={4}> 
        <Container>
        <h1>Hola soy una prueba</h1>
        <hr />
        <h1>Nuestro Equipo</h1>
        <hr />
        </Container>
        </Grid>
         <Grid item xs={12} md={8} container
        direction="row"
        justify="center"
        alignItems="center"
        spacing={1}
      >
        <CourseCard />
        </Grid>

        </Grid>
        </Wrap>

        )



}

export default HomePageBody; 