import React from 'react';
//Components 

import Navbar from "../../components/navbar/navbar.component";
import { Parallax} from 'react-parallax';

//Styles
import './homepage.styles.scss';

const HomePage  = (props) => {
  return(
      <div id="page-wrapper">
      <header className="App-header">
        {/* -----basic config-----*/}
      
      
      <Navbar title="Navbar" />

      <Parallax
            className="parallax"
            blur={{ min: -15, max: 15 }}
            bgImage={process.env.PUBLIC_URL + '/assets/parallax.png'}
            bgImageAlt="the dog"
            strength={100}
        >
            <div style={{ height: '800px', width:'800px' }} />

        </Parallax>
        
      </header>

      </div>
      
    
      
      
  );  
}

export default HomePage;