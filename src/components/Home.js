import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
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
            <Route exact path="/edtech">
              <Timetable />
            </Route>
            <Route path="/edtech/portion">
              <Portion />
            </Route>
            <Route path="/edtech/textbook">
              <Textbook />
            </Route>
            <Route path="/edtech/notes">
              <Notes />
            </Route>
            <Route path="/edtech/recommendation">
              <Recommendation />
            </Route>
            <Route path="/edtech/faculty">
              <People />
            </Route>
            <Route path="/edtech/about">
              <About />
            </Route>
            <Route path="/edtech/user">
              <div className="main_content_body">HI</div>
            </Route>
          </Switch>
        </Router>
      }
    </div>
  );
};

export default Home;
