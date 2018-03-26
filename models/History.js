const mongoose = require('mongoose')
const Schema = mongoose.Schema

const historySchema = new Schema({
  category: {
    type: String,
    required: [true, 'category cant be empty']
    },
  score: {
    type: Number,
    required: [true, 'score cant be empty']
    },
  status: {
    type: String,
    required: [true, 'status cant be empty']
  }
})

const History = mongoose.model('History', historySchema)
module.exports = History