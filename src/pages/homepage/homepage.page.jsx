import React from 'react';
//Components 

import Navbar from "../../components/navbar/navbar.component";
import { Parallax} from 'react-parallax';

//Styles
import './homepage.styles.scss';
import CourseImages from '../../components/courseImages/course-images.component';

const HomePage  = (props) => {
  return(
      <div id="page-wrapper">
      <header className="App-header">
        {/* -----basic config-----*/}
      
      
      <Navbar title="Agora3d" parallax={true} />

      <Parallax
            className="parallax"
            blur={{ min: -45, max: 15 }}
            bgImage={process.env.PUBLIC_URL + '/assets/parallax.png'}
            bgImageAlt="the dog"
            strength={500}
        >
            <div style={{ height: '800px', width:'800px' }} />
            <div className="centered">
            </div>
            

        </Parallax>
        
      </header>


              <h1>Cursos Disponibles</h1>
              <CourseImages />
            </div>

      
    
      
      
  );  
}

export default HomePage;