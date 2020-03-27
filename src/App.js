import React from "react";
import Navbar from "./components/navbar/navbar.component";
import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";
import HomePage from "./pages/homepage/homepage.page";
import TeamPage from "./pages/teampage/team.page";
import Footer from "./components/footer/footer.component";
import SignPage from "./pages/signpage/signpage.page";
import CoursePage from "./pages/coursespage/course-page";

function App() {
  return (
    <div className="app-wrapper">
      <Navbar title="Agora3d" parallax={true} />
      <Switch>
        <Route exact path="/team" component={TeamPage} />
        <Route exact path="/sign" component={SignPage} />
        <Route exact path="/cursos" component={CoursePage} />
        <Route path="/" component={HomePage} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
