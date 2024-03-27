const express = require('express')
const router = express.Router()

const Turma = require('../models/Turma')

router.get('/',(req, res)=>{
    res.send('Página de Turmas')
    
})

router.get('/create',(req, res)=>{
    res.render('../views/turmas/index')
})

module.exports = router