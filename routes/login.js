const express = require('express')
const router = express.Router()

const loginController = require('../controller/LoginController')

router.post('/autenticar',loginController.autenticar)

router.get('/logout',loginController.logout)

module.exports = router