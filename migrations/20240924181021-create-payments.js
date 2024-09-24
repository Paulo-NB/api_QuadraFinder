'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
  await queryInterface.createTable('payments',{
    id:{
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER 
    },
    method:{
      allowNull:true,
      type: Sequelize.INTEGER 

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
    createAt:{
      allowNull:false,
      type: Sequelize.DATE
    },
    updateAt:{
      allowNull:false,
      type: Sequelize.DATE
    }

  })
 },

  async down (queryInterface, Sequelize) {
  
    await queryInterface.dropTable('payments') 
  }
};
