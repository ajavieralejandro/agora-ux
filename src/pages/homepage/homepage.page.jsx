import React from 'react';
//Components
import Grid from '@material-ui/core/Grid';
import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';
import SearchButton from '../../components/search/search.component';
import InputAdornment from '@material-ui/core/InputAdornment';
import AccountCircle from '@material-ui/icons/AccountCircle';
import ParallaxDiv from '../../components/parallaxDiv/parallax-div.container';
import Paper from '@material-ui/core/Paper';
import {ContainerDiv} from '../../components/containerDiv/container-div.styles';
import Member from '../../components/member/member.component';
import Container from '@material-ui/core/Container';






import Navbar from "../../components/navbar/navbar.component";
import { Parallax} from 'react-parallax';
import CourseCard from "../../components/courseCard/course-card.component";

//Styles
import './homepage.styles.scss';
import CourseImages from '../../components/courseImages/course-images.component';

const HomePage  = (props) => {
  return(
      <div id="page-wrapper">
      <header className="App-header">
        {/* -----basic config-----*/}
      
        <Container >

      <Parallax
     
      blur={{ min: -45, max: 15 }}
      bgImage={process.env.PUBLIC_URL + '/assets/parallax.png'}
      bgImageAlt="the dog"
      strength={500}
  >
      <div style={{ height: '400px', width:'600px' }} />

     
      </Parallax>
      </Container>

     
  
        
      </header>
      <Container >
      <Member />
      <Member />
      <Member />
      </Container>              
            </div>

    
      
      
  );  
}

export default HomePage;