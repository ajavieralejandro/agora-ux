import React from 'react';
//Components
import SearchButton from '../../components/search/search.component';
import Container from '@material-ui/core/Container';
import HomePageBody from '../../components/homePageBody/home-page-body.component';
import CourseCard from '../../components/courseCard/course-card.component';
import ImageGrid from '../../components/imageGrid/image-grid.component';
import { Parallax} from 'react-parallax';
//Styles
import { InsideParallaxDiv, ParallaxImageDiv, Header } from './homepage.styles';

const HomePage  = (props) => {
  return(
      <div id="page-wrapper">
        <Header>      
        <Parallax
        blur={{ min: -45, max: 15 }}
        bgImage="https://lh3.googleusercontent.com/-vFnUrApIvRA/XlGwaSJjjII/AAAAAAAAFhg/ONyr3sahLfQnRsM1ddJShn2Yf1n1MR_9ACK8BGAsYHg/s0/2020-02-22.png"
        bgImageAlt="the dog"
        strength={500}>
        <ParallaxImageDiv />
  
          <InsideParallaxDiv>
            <h1>mucho más que una escuela online</h1>
            <SearchButton />
          </InsideParallaxDiv>
        </Parallax>

      </Header>
      <Container>
      <HomePageBody />
      </Container>
      <ImageGrid />

     
            </div>

    
      
      
  );  
}

export default HomePage;