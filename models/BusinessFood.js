const mongoose = require('mongoose')
const Schema = mongoose.Schema

const BusinessFood = new Schema({
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
  Location: {
    type: String,
    required: true
  },
  HoursOfAtention: {
    type: String,
    required: true
  },
  Category: {
    type: String,
    required: true
  }
})

const Business = mongoose.model('Business', BusinessFood)

module.exports = Business
