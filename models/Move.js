const mongoose = require('mongoose')
const Schema = mongoose.Schema

const moveSchema = new Schema({
    x:{
        type: Number,
        required: [true, 'x cant be empty']
    },
    y:{
        type: Number,
        required: [true, 'y cant be empty']
    },
    z:{
        type: Number,
        required: [true, 'z cant be empty']
    },
    power:{
        type: Number,
        required: [true, 'power cant be empty']
    }
})

const Move = mongoose.model('Move', moveSchema)
module.exports = Move