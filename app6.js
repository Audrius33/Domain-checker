const express = require('express')
const app6 = express()
const cors = require('cors')
const mongoose = require('mongoose')
const mainRouter = require('./routes/router6')
require('dotenv').config()

app6.listen(3000)
app6.use(express.json());
app6.use(cors())

mongoose.connect( process.env.MONGO_KEY, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    userFindAndModify: false
})
    .then(info => {

        console.log("connected")
    }).catch(e => {
    console.log(e)
    console.log('error while connecting to db')
})


app6.use(['/'], mainRouter)