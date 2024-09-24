'quadras strict'

const {Model, DataTypes} = require('sequelize')
const sequelize = require('../config/database')


class Quadras extends Model{}
Quadras.init({
    publicplace:DataTypes.STRING,
    zipcode:DataTypes.STRING,
    photos:DataTypes.STRING,
    type:DataTypes.STRING,
    State:DataTypes.STRING,
    city:DataTypes.STRING,
    neighborhood:DataTypes.STRING,
    name:DataType.STRING,

},{
    sequelize,
    modelName: 'Quadras'
})
module.exports = Quadras