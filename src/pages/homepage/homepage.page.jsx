import React from 'react';
//Components
import Grid from '@material-ui/core/Grid';
import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';
import SearchButton from '../../components/search/search.component';
import InputAdornment from '@material-ui/core/InputAdornment';
import AccountCircle from '@material-ui/icons/AccountCircle';






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
      
      
      <Navbar title="Agora3d" parallax={true} />
      <Parallax
     
      blur={{ min: -45, max: 15 }}
      bgImage={process.env.PUBLIC_URL + '/assets/parallax.png'}
      bgImageAlt="the dog"
      strength={500}
  >
      <div style={{ height: '600px', width:'400px' }} />
        <div className="centered">
        <h1>Quéres aprender impresión 3D? </h1>
        <p>Ofrecemos una variedad de curso dictados por expertos</p>
         <SearchButton />
        </div>
     
    

  </Parallax>
  
        
      </header>
            <div className="container">


           
             <CourseCard />
             <CourseCard />

              <h1>hoasldkajflkasdfjlasdkf</h1>
              <p>ajsdfasdkfjasdkjfhasdlkfjhasdfkjasdhfkasdfhsadkjfhasdkfjhasdkf</p>
              </div>
            </div>

      
    
      
      
  );  
}

export default HomePage;