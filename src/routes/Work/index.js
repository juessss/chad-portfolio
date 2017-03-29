import { injectReducer } from '../../store/reducers';

export default (store) => ({
   path: 'work',
   getComponent (nextState, cb) {
       
    require.ensure([], (require) => {
        
      const Counter = require('./containers/ProjectsContainer').default
      const reducer = require('./modules/projects').default
      
      injectReducer(store, { key: 'counter', reducer })
      
      cb(null, Counter)
      
    }, 'counter')
  }
});