const Sequelize = require('sequelize')
const sequelize = new Sequelize('escola','root','',{
    host:'localhost',
    dialect:'mysql'
})

module.exports = {Sequelize, sequelize}