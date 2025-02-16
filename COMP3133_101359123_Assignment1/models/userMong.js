const mongoose = require('mongoose')

const mongoUser = new mongoose.Schema({
    userName: {
        type:String,
        required: true,
    },
    email: {
        type:String,
        required: true,
        unique: true
    },
    password: {
        type:String,
        required: true,
    },
    createdAt:{
        type: Date,
        default: Date.now
    }
})

const userModel = mongoose.model("userModel", mongoUser)
module.exports = userModel