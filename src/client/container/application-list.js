// @flow
import { connect } from 'react-redux'

import { deleteItem, changeName } from '../action/job-applications'
import List from '../component/list'

const mapStateToProps = state => ({
  items: state.jobApplications.get('items'),
})

const mapDispatchToProps = dispatch => ({
  handleDelete: (id) => { dispatch(deleteItem(id)) },
  changeName: (id, val) => { dispatch(changeName(id, val)) },
})

export default connect(mapStateToProps, mapDispatchToProps)(List)
