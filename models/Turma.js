const database = require('./Database')
const Professor = require('./Professor')

const Turma = database.sequelize.define('turmas',{
    nome:{
        type:database.Sequelize.STRING
    }
})



// Estou dizendo que Professor possui muitas Turmas, e Turma pertence a apenas 1 professor
Professor.hasMany(Turma,{
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
})

Turma.belongsTo(Professor)

Turma.sync()// sincronizando com o banco

module.exports = Turma