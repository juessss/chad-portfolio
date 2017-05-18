import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import ProjectsRoute from './src/Framework/ReactRoutes/Projects';

const AboutPage = () => {
  return (<div>
     <CSSTransitionGroup
       transitionName="example"
       transitionAppear={true}
       transitionAppearTimeout={500}
       transitionEnterTimeout={500}
       transitionLeaveTimeout={300}>
      <div>ABout Page</div> 
    </CSSTransitionGroup>
    </div>
  )
}

const ContactPage = () => {
  return (
    <div>
     <CSSTransitionGroup
       transitionName="example"
       transitionAppear={true}
       transitionAppearTimeout={500}
       transitionEnterTimeout={500}
       transitionLeaveTimeout={300}>
      <div>Contact Page</div> 
    </CSSTransitionGroup>
    </div>
  )
}

class App extends Component {
  
  render() {
    
    return (
      <Router>
          <div>
            <ul>
              <li><Link to="/">Projects</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
      
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
