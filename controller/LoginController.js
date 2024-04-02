const Professor = require('../models/Professor')

exports.autenticar = async (req, res)=>{
    //res.json(req.body)

    try {
        if(req.body.email=="" || req.body.senha==""){
            req.flash('error','Usuário ou senha inválidos')
           return res.redirect('/')
        }
        else{
            let resultado = await Professor.findOne({
                where:{
                    email:req.body.email,
                    senha:req.body.senha
                }
            })

            if(!resultado){
                req.flash('error','Usuário não encontrado')
                res.redirect('/')
            }
            else{
                req.flash('sucesso','Usuário logado com sucesso')
                req.session.usuario = resultado.nome// criando uma sessão com o nome do usuário logado
                req.session.idUsuario = resultado.id
                res.redirect('/professor')
            }
        }
    } catch (error) {
        
    }
}

exports.logout = (req, res)=>{
    req.session.destroy((error)=>{
        res.redirect('/')
    })

}