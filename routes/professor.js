const express = require('express')
const router = express.Router()

const Professor = require('../models/Professor')

router.get('/',(req, res)=>{
    //res.json({msg:'Rota principal do professor'})
    let nome = req.session.usuario // acessando uma informação que foi criado por sessão em outro local
    res.render('../views/professor/index',{nomeUsuario:nome})
})

router.get('/create',(req, res)=>{
    //req.session.nome = 'Bruno' // criando a sessão chamado 'nome' e passando um valor pra ela
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