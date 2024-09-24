'use strict';

const { type } = require('os');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id:{
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name:{
        allowNull: false,
        type: Sequelize.STRING
      },
      pass:{
        allowNull:false,
        type: Sequelize.STRING
      },
      cpf:{
        allowNull:false,
        type: Sequelize.STRING
      },
      email:{
        allowNull:false,
        type: Sequelize.STRING
      },
      phone:{
        allowNull:false,
        type: Sequelize.STRING
      },
      type:{
        allowNull:false,
        type: Sequelize.STRING
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

    await queryInterface.dropTable('Users');

  }
};
