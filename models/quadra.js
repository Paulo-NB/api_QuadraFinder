'Quadra strict'

const {Model, DataTypes} = require('sequelize')
const sequelize = require('../config/database')


class Quadra extends Model{}
Quadra.init({
    publicplace:DataTypes.STRING,
    zipcode:DataTypes.STRING,
    photos:DataTypes.STRING,
    type:DataTypes.STRING,
    name:DataTypes.STRING,
    State:DataTypes.STRING,
    city:DataTypes.STRING,
    neighborhood:DataTypes.STRING

},{
    sequelize,
    modelName: 'Quadra'
})
module.exports = Quadra