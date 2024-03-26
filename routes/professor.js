const express = require('express')
const router = express.Router()

router.get('/',(req, res)=>{
    //res.json({msg:'Rota principal do professor'})
    res.render('../views/professor/index')
})

module.exports = router