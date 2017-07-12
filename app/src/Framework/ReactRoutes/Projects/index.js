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
            
            {this.state.work.map((item, index) => {
                return <div key={index} className="work-Item">
                    <img className="work-Item__Image" src="http://unsplash.it/300/300" />
                    <h2 className="work-Item__Title">
                        Work Item
                    </h2>
                    <div className="work-Item__SubTitle">
                        Client name
                    </div>
                </div> 
            })}
        </CSSTransitionGroup>
    </div>   );
    }
}

export default ProjectsRoute;