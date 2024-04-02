const express = require('express')
const router = express.Router()

const {verificaUsuario} = require('../helpers/verificaUsuario')

const atividadeController = require('../controller/AtividadeController')

// Essa rota precisa vir 1º do que a rota que possui parâmetros, pois na chamada das rotas lá na página 'index' da pasta atividade, pois se uma rota com parametros for chamada 1º, as demais rotas do mesmo grupo poderão ser interpretadas como sendo um parâmetro. 
router.get('/create',verificaUsuario,atividadeController.index)

router.post('/store',verificaUsuario,atividadeController.store)

router.get('/:id',verificaUsuario,atividadeController.atividadeId)



module.exports = router