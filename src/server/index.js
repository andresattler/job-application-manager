import express from 'express'

import renderApp from './render-app'
import { WEB_PORT } from '../shared/config'

const app = express()

app.use('/static', express.static('dist'))
app.use('/static', express.static('public'))

app.get('/', (req, res) => {
  res.send(renderApp())
})

app.listen(WEB_PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`server runnig on ${WEB_PORT}`)
})
