import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import "../App.css";
import About from "./about/About";
import People from "./people/People";
import NavBar from "./NavBar";
import TopNavBar from "./TopNavBar";
import Notes from "./notes/Notes";
import Portion from "./portion/Portion";
import Recommendation from "./recommendations/Recommendation";
import Textbook from "./textbook/Textbook";
import Timetable from "./timetable/Timetable";

const Home = () => {
  return (
    <div className="home_screen">
      {
        <Router>
          <TopNavBar />
          <NavBar />
          <Switch>
            <Route exact path="/">
              <Timetable />
            </Route>
            <Route path="/portion">
              <Portion />
            </Route>
            <Route path="/textbook">
              <Textbook />
            </Route>
            <Route path="/notes">
              <Notes />
            </Route>
            <Route path="/recommendation">
              <Recommendation />
            </Route>
            <Route path="/faculty">
              <People />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/user">
              <div>HI</div>
            </Route>
          </Switch>
        </Router>
      }
    </div>
  );
};

export default Home;
