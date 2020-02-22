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
import Member from '../../components/member/member.component';
import Container from '@material-ui/core/Container';
import HomePageBody from '../../components/homePageBody/home-page-body.component';
import Button from '@material-ui/core/Button';







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
      
      <Parallax
     
      blur={{ min: -45, max: 15 }}
      bgImage="https://lh3.googleusercontent.com/-vFnUrApIvRA/XlGwaSJjjII/AAAAAAAAFhg/ONyr3sahLfQnRsM1ddJShn2Yf1n1MR_9ACK8BGAsYHg/s0/2020-02-22.png"
      bgImageAlt="the dog"
      strength={500}
  >
  
      <div style={{ height: '800px', width:'600px' }} />
      <div className="centered">
        <h1>mucho más que una escuela online</h1>
        <SearchButton />
       
      </div>
     
      </Parallax>


     
  
        
      </header>
      <Container>
      <HomePageBody />
      </Container>
     
            </div>

    
      
      
  );  
}

export default HomePage;