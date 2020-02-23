import React from 'react';
import Grid from '@material-ui/core/Grid';
import Member from '../member/member.component';
import {Wrap,Title,StyledImage} from './home-page-body.style';
import SearchButton from '../search/search.component';
import { FaDelicious } from "react-icons/fa";

import Paper from '@material-ui/core/Paper';


const HomePageBody = () => {
    return(
        <Wrap>
        <Title>Agora3D</Title>
        <FaDelicious size={44} />
        <p>Escuela lationamericana de biomodelos</p>
        <Grid container spacing={4}>
        <Grid item xs={12} md={4}> 
        <h1>Hola soy una prueba</h1>
        <hr />
        <h1>Nuestro Equipo</h1>
        <hr />
        </Grid> <Grid item xs={12} md={8} container
        direction="row"
        justify="center"
        alignItems="center"
        spacing={1}
      >

      <StyledImage src="https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2015/11/131579-objetos-mas-sorprendentes-hechos-impresora-3d.jpg?itok=KNNEPm_Z" alt="Italian Trulli" />


     
        </Grid>

        </Grid>
        </Wrap>

        )



}

export default HomePageBody; 