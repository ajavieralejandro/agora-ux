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
  
  
  <Navbar title="Agora3d" />


    
  </header>
    <div className="team-wrap">
    <Container fixed>

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