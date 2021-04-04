let userEmail = require('./modules/userEmail')
let userName = require('./modules/randomName')
let randomImage = require('./modules/randomImage')
let description = require('./modules/description')
let genNumber = require('./modules/genMobileNum')
const express = require('express')
const app = express()


app.listen(3000)

app.get('/home', (req, res) => {

    let user = {
        username: userName(),
        userEmail: userEmail(),
        randomImage: randomImage(),
        description: description(),
        genNumber: genNumber(),
    }
    console.log(user)
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.set('Content-Type', 'application/json');
    res.send(user)

})

app.get('/home2', (req, res) => {
    res.send('sukurtas 2 serveris')
})
app.get('/home3', (req, res) => {
    res.send('sukurtas 3 serveris')
})






