const Sequelize = require('sequelize')

//import database 
const db = require('../config/db_config')

const User = db.define('users',{
    name: {
        type: Sequelize.STRING,
    },
    email: {
        type: Sequelize.STRING,
        unique: true
    },
    password: {
        type: Sequelize.STRING,
    }
})

module.exports = User