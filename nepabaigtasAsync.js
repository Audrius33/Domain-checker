const express = require('express')
const app = express()
const cors = require('cors')
const fetch = require('node-fetch')

app.listen(3000)

app.use(express.json())
app.use(cors())

// function getData(x) {
//     return new Promise((resolve, reject) => {
//
//         setTimeout(() => {
//             resolve(`it took ${x} second to resolve`)
//         }, x * 1000);
//     })
//
// }
//
// getData(3).then(res => {
//     console.log(res)
// })
//
// getData(5).then(res => {
//     console.log(res)
// })
//
// getData(10).then(res => {
//     console.log(res)
// })


// function getData() {
//     return new Promise((resolve, reject) => {
//
//         fetch('https://api.chucknorris.io/jokes/random')
//             .then(res => res.json())
//             .then(data => {
//                 if (data.value.length > 100) {
//                 resolve("yes its longer than 100")
//                 }
//                 else {
//                 reject("value is less than 100")
//                 }
//             })
//     })
//
// }
//
// getData().then(res => {
//     console.log(res)
// }).catch(e => console.log(e))


// async function getData() {
//     return new Promise(async (resolve, reject) => {
//
//         let resInfo = await fetch('https://api.chucknorris.io/jokes/random')
//
//         let data = await resInfo.json()
//
//         data ? resolve(data.value) : reject ("kazkas negerai")
//
//     })
// }
//
// async function getLength(data) {
//     return new Promise(async (resolve) => {
//
//         data ? resolve(data.length * 8) : null
//
//     })
// }
//
// async function getNames(number) {
//     return new Promise(async (resolve) => {
//         let arr = []
//         for (let i = 0; i < number; i++) {
//             arr.push('chuck')
//         }
//         resolve(arr)
//     })
// }
//
//
// async function chainPromises() {
//     let funData = await getData()
//     let fun2Data = await getLength(funData)
//     let fun3Data = await getNames(fun2Data)
//
//
//     console.log(funData, fun2Data, fun3Data)
//
// }
//
// chainPromises()

                            //show objects in async

app.get('/photo/:id', (req, res) => {
    let picArr = [

        'https://www.nvisioncenters.com/wp-content/uploads/shutterstock_527153227-300x209.jpg',

        'https://www.varle.lt/static/uploads/products/402/bos/bosch-professional-lazerinis-sichtbrille_H6E7Ss0.jpg',

        'https://partycity6.scene7.com/is/image/PartyCity/_pdp_sq_?$_1000x1000_$&$product=PartyCity/404405_01',

        'https://thumbor.forbes.com/thumbor/711x411/https://specials-images.forbesimg.com/imageserve/5fce964d2a25eb72755f987f/960x0.jpg?fit=scale',

        'https://ae01.alicdn.com/kf/H22ce45509b694846b5c49dff902edc34r/New-style-2020-Glasses-8-Bit-MLG-Pixelated-Sunglasses-Women-Men-Brand-Thug-Life-Party-Eyeglasses.jpg_640x640.jpg'

    ]
    let ID = req.params.id
    let choosePic = picArr[ID]
    res.send({choosePic})



})
app.get('/string/:id', (req, res) => {

    let comArr = [
        'labas labas',
        'diena diena',
        'viso viso',
        'gera diena',
        'open diena'
    ]
    let ID = req.params.id
    let chooseCom = comArr[ID]
    res.send({chooseCom})




})

let success = true


app.get('/random', (req, res) => {

    const random = Math.round(Math.random() * 4)
    let time = Number(req.params.time)
    if(success) {
        success = false
        setTimeout(() => {
            success = true
            res.send({random, success: true})
        },time * 9000)
    }

})








