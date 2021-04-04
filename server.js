const express = require('express')
const app = express()
const cors = require('cors')
const validate = require('./modules3/validation')
const dzina = require('dzina')

app.listen(3000)

app.use(express.json())
app.use(cors())

let users = [{
    username: 'asd',
    password1: 'asd',
    secret: 'asdasd'
}]

let prods = [
    {
        title: "first product",
        image: "https://www.nvisioncenters.com/wp-content/uploads/shutterstock_527153227-300x209.jpg",
        id: '587asd854ade43asddd',
        rentTill: 1616588618804,
        rentedBy: ""
    },
    {
        title: "second product",
        image: "https://www.varle.lt/static/uploads/products/402/bos/bosch-professional-lazerinis-sichtbrille_H6E7Ss0.jpg",
        id: '587as4869d85443asddd',
        rentTill: 1616588618804,
        rentedBy: ""
    },
    {
        title: "third product",
        image: "https://partycity6.scene7.com/is/image/PartyCity/_pdp_sq_?$_1000x1000_$&$product=PartyCity/404405_01",
        id: '587asasd87d85443asddd',
        rentTill: 1616588618804,
        rentedBy: ""
    },
    {
        title: "fourth product",
        image: "https://thumbor.forbes.com/thumbor/711x411/https://specials-images.forbesimg.com/imageserve/5fce964d2a25eb72755f987f/960x0.jpg?fit=scale",
        id: '587aaasd85443asaaddd',
        rentTill: 1616588618804,
        rentedBy: ""
    },
    {
        title: "fifth product",
        image: "https://ae01.alicdn.com/kf/H22ce45509b694846b5c49dff902edc34r/New-style-2020-Glasses-8-Bit-MLG-Pixelated-Sunglasses-Women-Men-Brand-Thug-Life-Party-Eyeglasses.jpg_640x640.jpg",
        id: '5f87asd87485443agsddd',
        rentTill: 1616588618804,
        rentedBy: ""
    },
]

app.post('/register', (req, res) => {

    const valid = validate(req.body, 'register', users)
    if (valid.error) {
        return res.send({success: false, ...valid})
    }

    const newUser = {secret: dzina.generate(), ...req.body}

    users.push(newUser)
    res.send({success: true, ...valid})

})

app.post('/login', (req, res) => {

    const valid = validate(req.body, 'login', users)
    if (valid.error) {
        return res.send({success: false, ...valid})
    }

    const user = users.filter(x => x.username === req.body.username && x.password1 === req.body.password1)
    console.log(user)
    res.send({success: true, secret: user[0].secret, ...valid})

})

app.post('/products', (req, res) => {
    res.send(prods)
})

app.get('/prods/:secret', (req, res) => {
    let key = req.params.secret
    let authUser = users.filter(x => x.secret === key)
    console.log(authUser)
    if (authUser.length > 0) {
        console.log('user exits')
        res.send({success: true, prods: prods})
    } else {
        res.send({error: true, message: 'no such user'})
    }

})

function rentLogic(time) {

    let timeNow = Date.now()

    time === '30' ? timeNow += 10000 : null
    time === '1' ? timeNow += 60000 : null
    time === '3' ? timeNow += 180000 : null

    return timeNow

}


app.get('/rent/:id/:time/:secret', (req, res) => {
    let id = req.params.id
    let time = req.params.time
    let secret = req.params.secret

    let prod = prods.filter(x => x.id === id)
    let user = users.filter(x => x.secret === secret)

    const rentTillTime = rentLogic(time)

    if (prod[0].rentTill > Date.now()) {
        return res.send({success: false, message: 'product is rented already'})
    } else {
        prod[0].rentTill = rentTillTime
        prod[0].rentedBy = user[0].username
        prods = prods.filter(x => x.id !== id)
        prods.push(prod[0])

        res.send({success: true, message: null, prods})
    }


    console.log(prod, user)
    console.log(rentLogic(time))

})
