const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const userDb = require('./public4/schemas/userSchema')
const mainRouter = require('./routes/router')
require('dotenv').config()

app.listen(3000)
app.use(express.json());
app.use(cors())

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

// function createUser() {
//     let user =  new userDb
//     user.name = ""
//     user.city =
//     user.age = ""
//     user.gender = ""
//     user.skinColor = ""
//     user.save().then(res => {
//         console.log('user created')
//         console.log(res)
//     })
//
//
// }
//
// createUser()

function findUser() {
    userDb.find({name: "audrius"}).then(res => {
        console.log(res)
    })
}
findUser()
//
// async function findUser2(age) {
//    let user = await userDb.find({age: age})
//         console.log(user)
//
// }
// findUser2("31")

// function createDataBase() {
//     let user = new userDb
//     user.wheelsCount = 4
//     user.passengers = 2
//     user.body = "volkswagen golf"
//     user.gasoline_left = 30
//     user.music_playing = "AC/DC"
//     user.color = "green"
//     user.save().then(res => {
//         console.log('user created')
//         console.log(res)
//     })
// }
//
// createDataBase()


app.use(['/'], mainRouter)

// function findUser() {
//     userDb.find({wheelsCount: "4"}).then(res => {
//         console.log(res)
//     })
// }
// findUser()
//
//
//
// async function findUser2(wheelsCount) {
//     let user = await userDb.find({wheelsCount: wheelsCount})
//     console.log(user)
// }
//
// findUser2("2")