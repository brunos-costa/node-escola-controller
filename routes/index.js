const express = require('express')
const router = express.Router()

router.get('/',(req, res)=>{
    //res.send('<h1>Página inicial do projeto</h1>')
    res.render('index')
})

module.exports = router