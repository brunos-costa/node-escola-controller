//CARREGANDO MÓDULOS
const express = require('express')
const handlebars = require('express-handlebars')
const session = require('express-session')
const flash = require('connect-flash')


// CONFIGURANDO SERVIDOR
const app = express()
const porta = 3000

// CONFIGURANDO O USO DE SESSÃO
app.use(session({
    secret: 'projeto escola',
    resave: false,
    saveUninitialized: true,//  evitará que o navegador use sessões vazias
  }))

app.use(flash()) // Habilitando o uso de mensagens de sessão utilizando o módulo connect-flash

// CRIANDO UM MIDDLEWARE PARA CRIAR VARIÁVEIS GLOBAIS E ARMAZENAR AS MENSAGENS FLASH
app.use((req, res, next)=>{
    res.locals.sucesso = req.flash('sucesso')
    res.locals.error = req.flash('error')
    next()// se não colocar o método next(), o programa não avança, fica travado
})

// CARREGANDO AS ROTAS
const indexRouter = require('./routes/index')
const professorRouter = require('./routes/professor')
const turmaRouter = require('./routes/turma')
const loginRouter = require('./routes/login')
const atividadeRouter = require('./routes/atividade')

// CONFIGURANDO O HANDLEBARS
app.engine('handlebars', handlebars.engine({extended:true}))// Esta linha configura o Handlebars como mecanismo de visualização, registrando o motor de visualização Handlebars com a chave 
app.set('view engine','handlebars')// Define o mecanismo de visualização padrão como Handlebars.

// CONFIGURAR EXPRESS PARA RECEBER DADOS DE FORMULÁRIO
app.use(express.urlencoded())
app.use(express.json())

// ROTAS
app.use('/',indexRouter)
app.use('/professor',professorRouter)
app.use('/turma',turmaRouter)
app.use('/login',loginRouter)
app.use('/atividade',atividadeRouter)


//EXECUTANDO SERVIDOR
app.listen(porta,()=>{
    console.log(`Servidor executando na porta ${porta}`)
})