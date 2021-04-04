const express = require('express')
const router = express.Router()
const controller = require('../public4/controlers/main')

router.post('/createUser', (req, res) => controller.createUser(req, res))
router.get('/findUser/:username', (req, res) => controller.findUser(req, res))
router.post('/updateName', (req, res) => controller.updateUserName(req, res))

module.exports = router