// @flow
import 'babel-polyfill'

import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import { Provider } from 'react-redux'
import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'

import App from './app'
// flow-disable-next-line
import './style/style.styl'
import { isProd } from '../shared/util'
import jobApplicationsReducer from './reducer/job-applications'
import { getData } from './action/job-applications'

// eslint-disable-next-line no-underscore-dangle
const composeEnhancers = (isProd ? null : window.__REDUX_DEVTOOLS_EXTENSION__) || compose

const store = createStore(
  combineReducers({ jobApplications: jobApplicationsReducer }),
  composeEnhancers(),
  applyMiddleware(thunkMiddleware),
)
// load inital State from Db
store.dispatch(getData())

const rootEl = document.getElementById('app')

const wrapApp = (AppComponent, reduxStore) => (
  <Provider store={reduxStore}>
    <AppContainer>
      <AppComponent />
    </AppContainer>
  </Provider>
)

ReactDOM.render(wrapApp(App, store), rootEl)

if (module.hot) {
  // flow-disable-next-line
  module.hot.accept('./app', () => {
    // eslint-disable-next-line global-require
    const NextApp = require('./app').default
    ReactDOM.render(wrapApp(NextApp, store), rootEl)
  })
}
