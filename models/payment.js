'use strict'

const { Model, DataTypes} = require('sequelize')
const sequelize = require('../config/database')

class Payment extends Model {}

Payment.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    total: DataTypes.DECIMAL,
    date: DataTypes.STRING,
    iduser: DataTypes.STRING,
    idlocation: DataTypes.STRING,
    cvv: DataTypes.STRING,
    numbercard: DataTypes.STRING,
    yearcard: DataTypes.STRING,
    monthcard: DataTypes.STRING
},{
    sequelize,
    modelName: 'Payment',
    timestamps: true        
})

module.exports = Payment