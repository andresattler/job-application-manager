// @flow
import { connect } from 'react-redux'

import List from '../component/list'

const mapStateToProps = state => ({
  items: state.jobApplications.get('items'),
})

export default connect(mapStateToProps)(List)
