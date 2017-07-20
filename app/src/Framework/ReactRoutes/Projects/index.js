import React, { Component } from 'react';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import { Link } from 'react-router-dom';


class ProjectsRoute extends Component {
    constructor(props) {
        super(props);
        this.state = {
            work: [
                {
                    title: 'Barrio Viejo', 
                    description: 'The best food places in Barcelona were in Borne',
                    client: 'Kapacucca',
                    image: 'https://8kueag.dm2301.livefilestore.com/y4mHUoTDVS4H9kf3kkbq0x13vqmuGxH1v_C5fqx4LfUAD_1ZWKgupMMd5TNHEbj7OhjcimM263tcPFbmjyViXi5NZqKdSwSAI4507RdawYVbJ99FfjTDY1az0UOMnLCXvQzWWkE9hBWYubmJiDKkko9l6JLe_hf02xZ8dLVgx_18CJ8vbNGlJAQCYt5TY3gEOBeHJiJHeJJbtzYO-N9j_b-2Q?width=1024&height=683&cropmode=none'
                },
                {
                    title: 'The End of Year Convention', 
                    description: 'A little mini description describing the project',
                    client: 'Client name',
                    image: 'https://kcqzgq.dm2301.livefilestore.com/y4m8AT1Mc-IHtm5iUVPHMcChcfn0RgeIdj3JLAUEfrkK8wLYY3dr105XbM309D06MmLJUyj2HGHtDeqTcja8wo7LhA77JxLfSyjzGpz-jpuvcAjag-itw0b7F6fsaM1B3gjSmkJt0vbwYK4KyFrYDPWcrzV7n_uJg-0Kjy2gRqe1RHMduAuVrfh4KLeMX9q0byokxb-wZ4ibsHkKuOrMdMk4A?width=1024&height=684&cropmode=none'
                },
                {
                    title: 'Work Item', 
                    description: 'A little mini description describing the project',
                    client: 'Client name',
                    
                    image: 'https://6v6pmg.dm2301.livefilestore.com/y4mto6Pt5AseMQjB3H8S6HzSNeFJMg1URIutbUnay5dvsGZT4LP2as8zRdi-qQUTtrHaT9GV7v1-nismiT6-5Gf5aREFoTO4-7McFG3kMUJUPMh3-bXwPArEk5n73MabmMJiekQG7IFe3tXGzcPfu15vgLBVtfkBeVvEEQmpK27_S4T6AKI1rtw7Gd9gRBVhQkr0AXXJhg_RxIxQs6e43PMUw?width=4576&height=3056&cropmode=none'
                }   
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
                            <img className="project__image" src={item.image} />
                            <h2 className="project__title">
                                {item.title}
                            </h2>
                            <p className="project__blurb">
                                {item.description}
                            </p>
                            
                            <Link to="/project/:id"><span className="project__subtitle">
                                {item.client}
                            </span></Link>
                        </div>
                    </div>
                })}
            </div>
        </CSSTransitionGroup>
    </div>   );
    }
}

export default ProjectsRoute;