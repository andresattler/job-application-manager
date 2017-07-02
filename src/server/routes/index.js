import { Router } from 'express'
import mongoose from 'mongoose'

const routes = Router()

const User = mongoose.model('User', {
  _id: String,
  items: Array,
})

routes.get('/get', (req, res) => {
  User.findById('defaultUser', (err, data) => {
    if (err) {
      res.send(err)
    } else {
      res.send(data.items)
    }
  })
})

routes.post('/push', (req, res) => {
  User.findByIdAndUpdate('defaultUser', { $push: { items: req.body.item } }).exec()
  res.sendStatus(200)
})

routes.post('/remove', (req, res) => {
  User.findByIdAndUpdate('defaultUser', { $pull: { items: { id: req.body.index } } }).exec()
  res.sendStatus(200)
})

routes.post('/update', (req, res) => {
  User.update({ _id: 'defaultUser', 'items.id': req.body.index }, { 'items.$.name': req.body.val }).exec()
  res.sendStatus(200)
})

export default routes
