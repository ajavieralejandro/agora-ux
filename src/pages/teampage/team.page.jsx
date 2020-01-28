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
    <header className="App-header">
    {/* -----basic config-----*/}
  
  
  <Navbar title="Agora3d" parallax="true" />
  <Parallax
  className="parallax"
  blur={{ min: -45, max: 15 }}
  bgImage={process.env.PUBLIC_URL + '/assets/teamparallax.jpg'}
  bgImageAlt="the dog"
  strength={500}
>
  <div style={{ height: '800px', width:'800px' }} />
  <div className="centered">
      <h1>Nuestro Equipo</h1>
  </div>
  

</Parallax>


    
  </header>
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