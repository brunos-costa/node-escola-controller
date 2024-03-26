const database = require('./Database')
const Professor = require('./Professor')

const Turma = database.sequelize.define('turmas',{
    nome:{
        type:database.Sequelize.STRING
    }
})

Turma.sync()// sincronizando com o banco

// Estou dizendo que Professor possui muitas Turmas, e Turma pertence apenas 1 professor
Professor.hasMany(Turma,{
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
})

Turma.belongsTo(Professor)

module.exports = Turma