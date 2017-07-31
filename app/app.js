import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import ProjectsRoute from './src/Framework/ReactRoutes/Home';
import AboutPage from './src/Framework/ReactRoutes/About';
import ContactPage from './src/Framework/ReactRoutes/Contact';
import Project from './src/Framework/ReactRoutes/Home/project.js';
import Navigation from './src/Framework/Components/Navigation';

class App extends Component {

  render() {

    return (
      <Router>
          <div className="page">

            <Link to="">
                <div className="logo">
                    logo
                </div>
            </Link>

            <Navigation></Navigation>

            <Route key="home" exact path="/" component={ProjectsRoute}/>
            <Route key="about" exact path="/About" component={AboutPage}/>
            <Route key="contact" exact path="/Contact" component={ContactPage}/>
            <Route key="project" exact path="/project/:id" component={Project}/>

          </div>
      </Router>
    )

  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
