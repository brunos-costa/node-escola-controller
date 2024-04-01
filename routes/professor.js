const express = require('express')
const router = express.Router()

const Professor = require('../models/Professor')
const Turma = require('../models/Turma')

const {verificaUsuario} = require('../helpers/verificaUsuario')

router.get('/',verificaUsuario,async (req, res)=>{
    try {
        let resultado = await Professor.findOne({include:Turma,where:{id:req.session.idUsuario}})
        if(!resultado){
            throw new Error()
        }
        else{
            let nome = req.session.usuario // acessando uma informação que foi criado por sessão em outro local
            console.log(resultado)
            res.render('../views/professor/index',{nomeUsuario:nome, dados:resultado.turmas})// como estou fazndo um join com tabela turma, o que no interessaé passar todos os dados que tem na tabela turmas one o professor autenticado possui registro. Por isso estamos acessando retutado.turmas
        }
    } catch (error) {
        req.flash('error', 'Não foi possível carregar os dados do professor')
        res.redirect('/professor')
    }

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