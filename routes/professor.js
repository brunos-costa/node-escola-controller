const express = require('express')
const router = express.Router()

const Professor = require('../models/Professor')

router.get('/',(req, res)=>{
    //res.json({msg:'Rota principal do professor'})
    res.render('../views/professor/index')
})

router.get('/create',(req, res)=>{
    res.render('../views/professor/addProfessor')
})

router.post('/store',async(req, res)=>{
    //res.render('../views/professor/addProfessor')
    //console.log(req.body)
    //res.json(req.body)

    try {
        const resultado = await Professor.create({
            nome:req.body.nome,
            email: req.body.email,
            senha: req.body.senha
        })

        if(!resultado){
            throw new Error()
        }
        res.redirect('/')

    } catch (error) {
        res.json({error:`O seguinte erro ocorreu: ${error}`})
    }
})

module.exports = router