import React, {Component} from 'react';
import {
  Link
} from 'react-router-dom';
import deepcopy from 'deepcopy';

class Navigation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active: false,
            menuClasses: []
        }
        
        this.toggleActive = this.toggleActive.bind(this);
    }
    
    componentDidMount() {
        this.toggleActive(false);
    }
    
    toggleActive = (isActive) => {
        let state = deepcopy(this.state);
        state.active = (isActive === true || isActive === false) ? isActive : !this.state.active;
        state.menuClasses = [
            'navigation__menu',
            (state.active) ? 'navigation__menu--active' : ''
        ];
        this.setState(state);
    }
    
    render() {
        return (<header className="navigation">
                <div className="navigation__hamburger" onClick={this.toggleActive}>
                  <div className="hamburger">
                    <div className="hamburger__bar"></div>
                  </div>
                </div>
                <div className={this.state.menuClasses.join(' ')}>
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