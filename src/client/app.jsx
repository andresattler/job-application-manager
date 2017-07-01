// @flow
import React from 'react'

import JobApplicationsList from './container/application-list'
import AddApplicationButton from './container/add-application-button'

const App = () => (
  <div className="container">
    <JobApplicationsList />
    <AddApplicationButton />
  </div>
)

export default App
