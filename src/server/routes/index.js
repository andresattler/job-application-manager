import { Router } from 'express'
import mongoose from 'mongoose'

const routes = Router()

const User = mongoose.model('User', {
  _id: String,
  items: Array,
})

routes.get('/applications', (req, res) => {
  res.send('Hello from the API')
})

routes.post('/push', (req, res) => {
  User.findByIdAndUpdate('defaultUser', { $push: { items: req.body.item } }).exec()
  res.sendStatus(200)
})

routes.post('/remove', (req, res) => {
  console.log(req.body.index)
  User.findByIdAndUpdate('defaultUser', { $pull: { items: { id: req.body.index } } }).exec()
  res.sendStatus(200)
})

export default routes
