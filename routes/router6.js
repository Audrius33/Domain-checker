const express = require('express')
const router = express.Router()
const controller = require('../public6/controllers/main')
const isValidUser = require('../public6/middleware/middleware')

router.post('/user', (req, res) => {
    console.log(req.body)
})

module.exports = router