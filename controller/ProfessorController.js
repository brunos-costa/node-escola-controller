const Professor = require('../models/Professor')
const Turma = require('../models/Turma')

const {body, query, validationResult} = require('express-validator')

// método para carregar dados do professor e turmas
exports.index = async (req, res)=>{
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

}

// método para exibir a tela de cadastro do professor
exports.create = (req, res)=>{
    //req.session.nome = 'Bruno' // criando a sessão chamado 'nome' e passando um valor pra ela
    res.render('../views/professor/addProfessor')
}

// Nesta versão, o middleware do Express Validator é aplicado diretamente ao array de middleware passado para a rota 'store'. Ou seja, temos que delimitar tódo o código entre colchetes []
exports.store = [
// O método 'body' é o ideal para pegar dados do formulário, pois caso seja enviado um dado do formulário correto a msg de erro nã o irá aparecer, diferente do método 'query' que mostra idependete se o campo está preenchido ou não
body('nome').isLength({min:5}).withMessage('Informe um nome com no mínimo 5 letras'),
body('email').isEmail().withMessage('Informe um email válido'),
body('senha').isLength({min:4}).withMessage('Informe uma senha com no mínimo 4 caracteres'),
body('confirm').custom((valor, {req})=>{
    if(valor !== req.body.senha){
        throw new Error('Senhas não conferem')
    }
    else{
        return true // é preciso informar 'return true' caso contrário irá ser exibido uma mensagem 'inválid value' para o usuário
    }
})
,async(req, res)=>{
    let erros = validationResult(req)
    // Verificando se a variável 'erros' não está vazia
    if(!erros.isEmpty()){
        return res.render('../views/professor/addProfessor',{erros:erros.array()})
    }
    else{
        try {
            const resultado = await Professor.create({
                nome:req.body.nome,
                email: req.body.email,
                senha: req.body.senha
            })
    
            if(!resultado){
                throw new Error()
            }
            req.flash('sucesso','Uauário criado com sucesso')
            res.redirect('/')
    
        } catch (error) {
            res.json({error:`O seguinte erro ocorreu: ${error}`})
        }
    }
}]
