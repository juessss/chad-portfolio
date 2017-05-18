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

export default AboutPage;