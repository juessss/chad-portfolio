import React, {Component} from 'react';
import {
  Link
} from 'react-router-dom';

class Navigation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active: false
        }
    }
    
    componentDidMount() {
        
    }
    
    render() {
        return (<header className="navigation">
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
            </header>);
    }
}


export default Navigation;