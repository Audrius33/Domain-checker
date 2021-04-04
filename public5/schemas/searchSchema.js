const mongoose = require('mongoose')

const Schema = mongoose.Schema;
const searchSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    time: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        required: true
    },
    expire: {
        type: String,
        required: true
    },



})

const domain = mongoose.model("userModel", searchSchema)

module.exports = domain