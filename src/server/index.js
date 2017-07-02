// @flow
import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'

import renderApp from './render-app'
import { WEB_PORT } from '../shared/config'
import routes from './routes'

mongoose.connect('mongodb://127.0.0.1:27017/test', (err) => {
  // eslint-disable-next-line
  err && console.log('db connection failed')
})
const app = express()

app.use(bodyParser.json())
app.use('/static', express.static('dist'))

app.use('/api', routes)

app.get('/', (req, res) => {
  res.send(renderApp())
})

app.listen(WEB_PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`server runnig on ${WEB_PORT}`)
})
