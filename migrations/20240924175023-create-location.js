'use strict';

const { type } = require('os');
const sequelize = require('../config/database');
const { create } = require('../models/location');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Locations',{
      id:{
        allowNull: false,
        autoIncrement: true,
        primaryKey:true,
        type: Sequelize.INTEGER
      },
      iduser:{
        allowNull: true,
        autoIncrement: true,
        type: Sequelize.INTEGER
      },
      idcourt:{
        allowNull: true,
        autoIncrement: true,
        type: Sequelize.INTEGER
      },
      idpayment:{
        allowNull: true,
        autoIncrement: true,
        type: Sequelize.INTEGER
      },
      date:{
        allowNull: true,
        autoIncrement: true,
        type: Sequelize.INTEGER
      },
      createAt:{
        allowNull: false,
        type: Sequelize.DATE
        
      },
      updateAt:{
        allowNull: false,
        type: Sequelize.DATE

      }
    })

  },

  async down (queryInterface, Sequelize) {
    
     await queryInterface.dropTable('Locations');
     
  }
};
