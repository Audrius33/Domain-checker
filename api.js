const express = require('express')
const app = express()
const cors = require('cors')


app.listen(3000)

app.use(express.json())
app.use(cors())

let posts = []

app.post('/post', (req, res) => {
    console.log(req.body)
    posts.push(req.body)
    console.log(posts)
    res.send(posts)

})

app.get('/getData', (req, res) => {
    console.log(req.body)
    res.send(posts)

})
app.get('/deletePost/:id', (req, res) => {
    console.log(req.params.id)
    const deleteP = req.params.id
    posts.splice(deleteP, 1)
    res.send(posts)

})
app.post('/updatePost/', (req, res) => {
    console.log(req.body)
    posts.push(req.body)
    posts = posts.filter(item => item.id !== req.body.id )
    posts.push(req.body)
    res.send(posts)


})




