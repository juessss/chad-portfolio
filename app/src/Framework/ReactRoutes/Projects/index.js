import React, { Component } from 'react';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

class ProjectsRoute extends Component {
    constructor(props) {
        super(props);
        this.state = {
            work: [
                {title: 'Work Item', client: 'Client name' },
                {title: 'Work Item', client: 'Client name' },
                {title: 'Work Item', client: 'Client name' }   
            ]   
        }
    }
    
    componentDidMount() {
        
    }
    
    render() {
         return (<div>
         <CSSTransitionGroup
           transitionName="example"
           transitionAppear={true}
           transitionAppearTimeout={500}
           transitionEnterTimeout={500}
           transitionLeaveTimeout={300}>
            
            <div className="projects">
                {this.state.work.map((item, index) => {
                    return <div key={index} className="projects__item">
                        <div className="project">
                            <img className="project__image" src="http://unsplash.it/500/500" />
                            <h2 className="project__title">
                                Work Item
                            </h2>
                            <div className="project__subtitle">
                                Client name
                            </div>
                        </div>
                    </div>
                })}
            </div>
        </CSSTransitionGroup>
    </div>   );
    }
}

export default ProjectsRoute;