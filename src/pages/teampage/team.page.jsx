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

const TeamPage = ({team,fetchTeam,loading}) =>{
  const array = [1,2,3];
 //Analogo a componentDidMount
  useEffect(() => {
    console.log("Loading es : ",loading);
    if(team.length===0)
    fetchTeam();
  }, [])

  useEffect(()=>{
    console.log("Las diferencias : ");
    console.log("team ahora es : ",team);
    if(team)
    team.forEach(member => console.log("miembro : ",member));

  },[loading]);


  


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
      {(!loading)?team.map(member => <Member teamMember={member} />):<h1>Soy null</h1>}      
      </Grid>
    </Container> 
    </div>
    
    </div>
    );
    

}

const mapStateToProps = state => ({
   team : state.team.team,
   loading : state.team.loading
})

const mapDispatchToProps = dispatch  =>({
  setTeam : (team) => dispatch(setTeam(team)),
  fetchTeam : () => dispatch(fetchTeam())
})



export default connect(mapStateToProps,mapDispatchToProps)(TeamPage);