import React from 'react';
import Navbar from '../../components/navbar/navbar.component';
import { Parallax} from 'react-parallax';

import "./team.styles.scss";

const TeamPage = () =>{
    return(
    <div>
    <header className="App-header">
    {/* -----basic config-----*/}
  
  
  <Navbar title="Agora3d" />

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
    <div className="team-wrap">
        <h1>Felicitaciones soy Team Page</h1>

<h1>My First Heading</h1>

<p>My first paragraph.</p>
    </div>
    </div>
    );
    

}

export default TeamPage;