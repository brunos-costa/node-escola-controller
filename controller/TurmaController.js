const Turma = require('../models/Turma')

// Método para exibir página da turma
exports.index = (req, res)=>{
    res.send('Página de Turmas')
    
}

// Método para exibir página de cadastro da turma
exports.create = (req, res)=>{
    //passando os dados do usuário para a página de turma
    let nome = req.session.usuario
    res.render('../views/turmas/index',{nomeUsuario:nome})
}

// Método para inserir um registro no banco
exports.store = (req, res)=>{
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
            res.redirect('/turma/create')
        }
    } catch (error) {
        req.flash('error','Não foi possível cadastrar a turma')
        res.redirect('/turma/create')
    }
    

    
    
}

// Método para excluir um registro de turma do banco
exports.destroy = async(req, res)=>{
    try {
        let resultado = await Turma.destroy({
            where:{
                id:req.params.id
            }
        })
        if(!resultado){
            throw new Error()
        }
        else{
            req.flash('sucesso','Registro deletado com sucesso')
            res.redirect('/professor')
        }
    } catch (error) {
        req.flash('error','Não foi possível excluir o registro')
        res.redirect('/professor')
    }
}