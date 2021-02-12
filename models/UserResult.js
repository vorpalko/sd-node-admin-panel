const { Schema, model } = require('mongoose')

const schema = new Schema({
  reference: {
    type: String,
    required: false
  },
  name: {
    type: String,
    required: false
  },
  result: {
    type: String,
    required: false
  },
  time: {
    type: String,
    required: false
  }
})

module.exports = model('UserResult', schema)