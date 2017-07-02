// @flow
import { connect } from 'react-redux'

import Button from '../component/button'
import { addItem } from '../action/job-applications'

const mapStateToProps = () => ({
  label: '+',
  className: 'add-button',
})

const mapDispatchToProps = dispatch => ({
  handleClick: () => {
    dispatch(addItem())
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(Button)
