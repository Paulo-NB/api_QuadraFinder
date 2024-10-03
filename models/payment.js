'use strict'

const { Model, DataTypes} = require('sequelize')
const sequelize = require('../config/database')

class Payment extends Model {}
    Payment.init({
        method: DataTypes.STRING,
        total: DataTypes.DECIMAL,
        date: DataTypes.STRING,
        iduser: DataTypes.STRING,
        idlocation: DataTypes.STRING,
        
    },{
        sequelize,
        modelName: 'Payment'
    })

module.exports = Payment
