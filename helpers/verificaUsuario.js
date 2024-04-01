module.exports = {
    verificaUsuario:(req, res, next)=>{
        if(req.session.usuario){
            console.log('Usuario Logado')
            return next()
        }
        else{
            console.log('Não logado')
            req.flash('error', 'Você precisa estar logado para acessar essa funcionalidade')
            res.redirect('/')
        }
    }
}