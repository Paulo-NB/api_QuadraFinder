'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Locations',{
      id:{
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      iduser:{
        allowNull: false,
        type: Sequelize.INTEGER
      },
      idcourt:{
        allowNull: false,
        type: Sequelize.INTEGER
      },
      idpayment:{
        allowNull: false,
        type: Sequelize.INTEGER
      },
      date:{
        allowNull: false,
        type: Sequelize.DATE
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
