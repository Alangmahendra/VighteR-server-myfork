const mongoose = require('mongoose')
const Schema = mongoose.Schema

const movementSchema = new Schema({
    name: {
        type: String,
        required: [true, 'name field cant be empty']
    },
    move: {
        type: Schema.Types.ObjectId,
        ref: 'Move'
    }
})

const Movement = mongoose.model('Movement', movementSchema)
module.exports = Movement