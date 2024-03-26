const express = require('express')
const router = express.Router()

const Turma = require('../models/Turma')

router.get('/',(req, res)=>{
    res.send('Página de Turmas')
})

module.exports = router