import React from 'react';
import Navbar from "./components/navbar/navbar.component";
import './App.css';
import { Switch, Route, Redirect } from "react-router-dom";
import HomePage from './pages/homepage/homepage.page';
import TeamPage from './pages/teampage/team.page';


function App() {
  return (
    <div className="app-wrapper">
    <Navbar title="Agora3d" parallax={true} />
    <Switch>
      <Route exact path="/team" component={TeamPage} />
      <Route  path="/" component={HomePage} />

    </Switch>
   </div>
  );
}

export default App;
