const mongoose = require('mongoose')

const Schema = mongoose.Schema;
const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    skinColor: {
        type: String,
        required: true
    }
})

const user = mongoose.model("userModel", userSchema)

module.exports = user