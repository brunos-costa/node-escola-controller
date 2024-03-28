const database = require('./Database')
const Turma = require('./Turma')

const Atividade = database.sequelize.define('atividades',{
    descricao:{
        type:database.Sequelize.STRING
    }
})

Turma.hasMany(Atividade,{
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
})

Atividade.belongsTo(Turma)

Atividade.sync()
module.exports = Atividade