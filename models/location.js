'use strict'
const {Model, DataTypes} = require('sequelize')
const sequelize = require('../config/database')

class Location  extends Model{}

    Location.init({
        id: DataTypes.STRING,
        iduser: DataTypes.STRING,
        idcourt: DataTypes.STRING,
        idpayment:DataTypes.STRING,
        date: DataTypes.STRING
    },{
        sequelize,
        modelName: 'Location'
    })


module.exports = Location