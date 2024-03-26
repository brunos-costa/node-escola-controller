const database = require('./Database')

const Professor = database.sequelize.define('professores',{
    nome:{
        type:database.Sequelize.STRING
    },
    email:{
        type:database.Sequelize.STRING
    },
    senha:{
        type:database.Sequelize.STRING
    }
})

Professor.sync()// sincronixando com o banco de dados

module.exports = Professor