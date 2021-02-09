const { Schema, model } = require('mongoose')

const schema = new Schema({
  reference: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  result: {
    type: String,
    required: true
  },
  time: {
    type: String,
    required: false
  }
})

module.exports = model('UserResult', schema)