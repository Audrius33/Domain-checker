const express = require('express')
const app2 = express()
const cors = require('cors')
const mongoose = require('mongoose')
const mainRouter = require('./routes/router2')
require('dotenv').config()

app2.listen(3000)
app2.use(express.json());
app2.use(cors())

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


app2.use(['/'], mainRouter)