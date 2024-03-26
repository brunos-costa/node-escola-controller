//CARREGANDO MÓDULOS
const express = require('express')
const handlebars = require('express-handlebars')


// CONFIGURANDO SERVIDOR
const app = express()
const porta = 3000

// CARREGANDO AS ROTAS
const indexRouter = require('./routes/index')
const professorRouter = require('./routes/professor')
const turmaRouter = require('./routes/turma')

// CONFIGURANDO O HANDLEBARS
app.engine('handlebars', handlebars.engine())// Esta linha configura o Handlebars como mecanismo de visualização, registrando o motor de visualização Handlebars com a chave 
app.set('view engine','handlebars')// Define o mecanismo de visualização padrão como Handlebars.

// CONFIGURAR EXPRESS PARA RECEBER DADOS DE FORMULÁRIO
app.use(express.urlencoded())
app.use(express.json())

// ROTAS
app.use('/',indexRouter)
app.use('/professor',professorRouter)
app.use('/turmas',turmaRouter)


//EXECUTANDO SERVIDOR
app.listen(porta,()=>{
    console.log(`Servidor executando na porta ${porta}`)
})