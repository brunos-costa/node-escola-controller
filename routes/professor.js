const express = require('express')
const router = express.Router()

const professorController = require('../controller/ProfessorController')
const {verificaUsuario} = require('../helpers/verificaUsuario')



router.get('/',verificaUsuario,professorController.index)

router.get('/create',professorController.create)

router.post('/store',professorController.store)


module.exports = router