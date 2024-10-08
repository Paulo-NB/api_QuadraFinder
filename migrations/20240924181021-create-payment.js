'use strict';

const sequelize = require('../config/database');
const {primaryKeyAttribute} = require('../models/payment')


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
  await queryInterface.createTable('Payments',{
    id:{
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER 
    },
    method:{
      allowNull:true,
      type: Sequelize.STRING

    },
    total:{
      allowNull: true,
      type: Sequelize.DECIMAL

    },
    date:{
      allowNull: true,
      type: Sequelize.DATE

    }, 
    iduser:{
      allowNull: false,
      type: Sequelize.INTEGER 

    },
    idlocation:{
      allowNull: false,
      type: Sequelize.INTEGER 

    },
    createdAt:{
      allowNull:false,
      type: Sequelize.DATE
    },
    updatedAt:{
      allowNull:false,
      type: Sequelize.DATE
    }

  })
 },

  async down (queryInterface, Sequelize) {
  
    await queryInterface.dropTable('Payments') 
  }
};
