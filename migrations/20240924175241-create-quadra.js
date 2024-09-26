'use strict';
const {type} = require('os');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Quadras',{
      id:{
        allowNull:false,
        autoIncrement:true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      publicplace:{
        allowNull:false,
       
        type: Sequelize.STRING
      },
      zipcode:{
        allowNull:false,
        
        type: Sequelize.STRING
      },
      photos:{
        allowNull:false,
        
        type: Sequelize.STRING
      },
      type:{
        allowNull:false,
        
        type: Sequelize.STRING
      },
      name:{
        allowNull:false,
       
        type: Sequelize.STRING
      },
      state:{
        allowNull:false,
        
        type: Sequelize.STRING
      },
      city:{
        allowNull:false,
        
        type: Sequelize.STRING
      },
      neighborhood:{
        allowNull:false,
        
        type: Sequelize.STRING
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
    await queryInterface.dropTable('Quadras')
  }
};
