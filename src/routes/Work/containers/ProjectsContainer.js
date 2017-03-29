import { connect } from 'react-redux'
import { increment, doubleAsync } from '../modules/projects'

import Counter from '../components/Projects';

const mapDispatchToProps = {
  increment : () => increment(1),
  doubleAsync
}

const mapStateToProps = (state) => ({
  counter : state.counter
})

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
