const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Food = new Schema({
  photo: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  Category: {
    type: String,
    required: true
  }
})

const food = mongoose.model('Food', Food)

module.exports = food
