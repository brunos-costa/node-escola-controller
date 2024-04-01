const express = require('express')
const router = express.Router()

const Atividade = require('../models/Atividade')
const Turma = require('../models/Turma')

const {verificaUsuario} = require('../helpers/verificaUsuario')

// Essa rota precisa vir 1º do que a rota que possui parâmetros, pois na chamada das rotas lá na página 'index' da pasta atividade, pois se uma rota com parametros for chamada 1º, as demais rotas do mesmo grupo poderão ser interpretadas como sendo um parâmetro. 
router.get('/create',verificaUsuario,(req,res)=>{
    res.render('../views/atividade/addAtividade')
})

router.post('/store',verificaUsuario,async (req, res)=>{
    try {
        let resultado = await Atividade.create({
            descricao:req.body.descricao,
            turmaId: req.session.idTurma
        })

        if(!resultado){
            throw new Error()
        }
        else{
            req.flash('sucesso','Atividade cadastrada com sucesso')
            res.redirect(`/atividade/${req.session.idTurma}`)
        }
        
    } catch (error) {
        req.flash('error','Não foi possível cadastrar a atividade')
        res.redirect('/atividade/create')
    }
})

router.get('/:id',verificaUsuario,async (req, res)=>{
    let nome = req.session.usuario // acessando uma informação que foi criado por sessão em outro local
    req.session.idTurma = req.params.id// criando uma sessão com o id da turma enviado
    try {
        let resultado = await Turma.findByPk(req.params.id, {include:Atividade})
        if(!resultado){
            throw new Error()
        }
        else{
            console.log(resultado)
            res.render('../views/atividade/index',{nomeUsuario:nome, turma:resultado.dataValues, atividades:resultado.atividades})
        }
    } catch (error) {
        req.flash('error','Turma não encontrada')
        res.redirect('/professor')
    }
    
})



module.exports = router