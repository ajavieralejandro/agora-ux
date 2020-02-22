import React from 'react';
import Navbar from '../../components/navbar/navbar.component';
import Member from '../../components/member/member.component';
import Container from '@material-ui/core/Container';

import Grid from '@material-ui/core/Grid';

import { Parallax} from 'react-parallax';

import "./team.styles.scss";

const TeamPage = () =>{
    return(
    <div>
    
    <div className="team-wrap">
    <Container fixed>
    <h1>Nuestro Equipo </h1>


    <Grid
    container
    direction="row"
    justify="space-around"
    alignItems="center"
  >
      
      <Member />
      <Member />
      <Member />
      <Member />
      <Member />
      <Member />
      <Member />
      <Member />
      <Member />
      <Member />

      </Grid>
    </Container> 
    </div>
    
    </div>
    );
    

}

export default TeamPage;