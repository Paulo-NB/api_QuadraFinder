'use strict'
const {Model, DataTypes} = require('sequelize')
const sequelize = require('../config/database')

class Location  extends Model{}

    Location.init({
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        iduser: DataTypes.STRING,
        idcourt: DataTypes.STRING,
        date: DataTypes.DATEONLY
    },{
        sequelize,
        modelName: 'Location',
        timestamps: true
    })


module.exports = Location