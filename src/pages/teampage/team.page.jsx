import React, { useEffect } from 'react'
import Navbar from '../../components/navbar/navbar.component';
import {setTeam,fetchTeam} from '../../redux/collections/collection.actions';
import Member from '../../components/member/member.component';
import Container from '@material-ui/core/Container';
import { connect } from "react-redux";


import Grid from '@material-ui/core/Grid';

import { Parallax} from 'react-parallax';

import "./team.styles.scss";
import { dispatch } from 'rxjs/internal/observable/pairs';

const TeamPage = ({team,fetchTeam}) =>{

  useEffect(() => {
    console.log("Estoy por pedirle que empiece la saga");
    console.log("El estado es : ",team);
    fetchTeam();
  }, [])

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

const mapStateToProps = state => ({
   team : state.team
})

const mapDispatchToProps = dispatch  =>({
  setTeam : (team) => dispatch(setTeam(team)),
  fetchTeam : () => dispatch(fetchTeam())
})



export default connect(mapStateToProps,mapDispatchToProps)(TeamPage);