const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    username: {
      type: String,
      required: [true, 'username cant be empty']
    },
    password: {
      type: String,
      required: [true, 'password cant be empty']
    },
    email: {
      type: String,
      required: [true, 'email is required'],
      unique: true,
      validate: {
        validator: function(value) {
        return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/igm.test(value)
        }
      }
    },
    userHistory: [{
        type: Schema.Types.ObjectId,
        ref: 'History'
    }]
})

const User = mongoose.model('User', userSchema)
module.exports = User