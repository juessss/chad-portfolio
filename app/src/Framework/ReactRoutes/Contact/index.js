import React from 'react';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

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

export default ContactPage;