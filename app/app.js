import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import ProjectsRoute from './src/Framework/ReactRoutes/Projects';
import AboutPage from './src/Framework/ReactRoutes/About';
import ContactPage from './src/Framework/ReactRoutes/Contact';

class App extends Component {
  
  render() {
    
    return (
      <Router>
          <div>
            
            <div className="l-branding">
                logo
            </div>
            
            <header className="navigation">
                <div className="navigation__hamburger">
                  <div className="hamburger">
                    <div className="hamburger__bar"></div>
                  </div>
                </div>
                <div className="navigation__menu">
                  <ul className="menu">
                    <li className="menu__item">
                      <Link className="menu__link" to="/">Projects</Link>
                    </li>
                    <li className="menu__item">
                      <Link className="menu__link" to="/about">About</Link>
                    </li>
                    <li className="menu__item">
                      <Link className="menu__link" to="/contact">Contact</Link>
                    </li>
                  </ul>
                </div>
            </header>
      
            <hr/>
            
            <Route key="home" exact path="/" component={ProjectsRoute}/>
            <Route key="about" exact path="/About" component={AboutPage}/>
            <Route key="contact" exact path="/Contact" component={ContactPage}/>
            
          </div>
      </Router>
    )
    
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
