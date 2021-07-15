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
  const { path, url } = useRouteMatch();

  return (
    <div className="home_screen">
      {
        <Router>
          <TopNavBar />
          <NavBar />
          <Switch>
            <Route exact path={`${url}/`}>
              <Timetable />
            </Route>
            <Route path={`${url}/portion`}>
              <Portion />
            </Route>
            <Route path={`${url}/textbook`}>
              <Textbook />
            </Route>
            <Route path={`${url}/notes`}>
              <Notes />
            </Route>
            <Route path={`${url}/recommendation`}>
              <Recommendation />
            </Route>
            <Route path={`${url}/faculty`}>
              <People />
            </Route>
            <Route path={`${url}/about`}>
              <About />
            </Route>
            <Route path={`${url}/user`}>
              <div className="main_content_body">HI</div>
            </Route>
          </Switch>
        </Router>
      }
    </div>
  );
};

export default Home;
