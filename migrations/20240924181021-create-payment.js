'use strict';

const { type } = require('os');
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
    total:{
      allowNull: true,
      type: Sequelize.DECIMAL
    },   
    iduser:{
      allowNull: false,
      type: Sequelize.INTEGER 

    },
    idlocation:{
      allowNull: false,
      type: Sequelize.INTEGER 

    },
    cvv:{
      allowNull: false,
      type: Sequelize.INTEGER

    },
    numbercard:{
      allowNull: false,
      type: Sequelize.STRING
    },
    yearcard:{
      allowNull: false,
      type: Sequelize.INTEGER

    },
    date:{
      allowNull: false,
      type: Sequelize.DATE
    },
    monthcard:{
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
