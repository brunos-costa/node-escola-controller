//CARREGANDO MÓDULOS
const express = require('express')
const handlebars = require('express-handlebars')


// CONFIGURANDO SERVIDOR
const app = express()
const porta = 3000

// CARREGANDO AS ROTAS
const indexRouter = require('./routes/index')
const professorRouter = require('./routes/professor')

// CONFIGURANDO O HANDLEBARS
app.engine('handlebars', handlebars.engine())// Esta linha configura o Handlebars como mecanismo de visualização, registrando o motor de visualização Handlebars com a chave 
app.set('view engine','handlebars')// Define o mecanismo de visualização padrão como Handlebars.
app.set('views','./views')// Define o diretório de visualizações como ./views, onde o Express.js procurará por arquivos de visualização

// ROTAS
app.use('/',indexRouter)
app.use('/professor',professorRouter)


//EXECUTANDO SERVIDOR
app.listen(porta,()=>{
    console.log(`Servidor executando na porta ${porta}`)
})