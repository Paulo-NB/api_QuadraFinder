'payments strict'

const { Model, DataTypes} = require('sequelize')
const sequelize = require('../config/database')

class Payments extends Model {}
    Payments.init({
        method: DataTypes.STRING,
        total: DataTypes.STRING,
        date: DataTypes.STRING,
        iduser: DataTypes.STRING,
        idlocation: DataTypes.STRING,
        
    },{
        sequelize,
        modelName: 'Payments'
    })

module.exports = Payments
