const express = require('express')
const router = express.Router()

const Turma = require('../models/Turma')

router.get('/',(req, res)=>{
    res.send('Página de Turmas')
    
})

router.get('/create',(req, res)=>{
    res.render('../views/turmas/index')
})

router.post('/store',(req, res)=>{
    try {
        if(req.body.nomeTurma == ""){
            req.flash('error','Informe o nome da turma')
            return res.redirect('/turma/create')
        }

        let resultado = Turma.create({
            nome:req.body.nomeTurma,
            professoreId: req.session.idUsuario 
        })

        if(!resultado){
            throw new Error()
        }
        else{
            req.flash('sucesso','Turma cadastrada com sucesso')
            res.redirect('/professor')
        }
    } catch (error) {
        req.flash('error','Não foi possível cadastrar a turma')
        res.redirect('/turma/create')
    }
    

    
    
})

module.exports = router