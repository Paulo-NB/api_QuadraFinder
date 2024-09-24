'use strict'
const {Model, DataTypes} = require('sequelize')
const sequelize = require('../config/database')

class User extends Model{}

User.init({
    name:  DataTypes.STRING,
    pass: DataTypes.STRING,
    cpf: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.STRING,
    type: DataTypes.BOOLEAN
}, {
    sequelize,
    modelName: 'User'
})

module.exports = User