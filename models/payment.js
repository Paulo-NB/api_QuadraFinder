'payment strict'

const { Model, DataTypes} = require('sequelize')
const sequelize = require('../config/database')

class payment extends Model {}
    payment.init({
        method: DataTypes.STRING,
        total: DataTypes.STRING,
        date: DataTypes.STRING,
        iduser: DataTypes.STRING,
        idlocation: DataTypes.STRING,
        
    },{
        sequelize,
        modelName: 'payment'
    })

module.exports = payment
