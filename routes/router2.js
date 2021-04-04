const express = require('express')
const router = express.Router()
const controller = require('../public5/controlers/main')
const isValidDomain = require('../public5/middleWare/middleWare')

router.post('/checkDomain', isValidDomain.checkIfValid, controller.checkDomain)

module.exports = router