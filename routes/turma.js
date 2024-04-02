const express = require('express')
const router = express.Router()

const {verificaUsuario} = require('../helpers/verificaUsuario')

const turmaController = require('../controller/TurmaController')

router.get('/',verificaUsuario,turmaController.index)

router.get('/create',verificaUsuario,turmaController.create)

router.post('/store',verificaUsuario,turmaController.store)

router.get('/destroy/:id',verificaUsuario,turmaController.destroy)

module.exports = router