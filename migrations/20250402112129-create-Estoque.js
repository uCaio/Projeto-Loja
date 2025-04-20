'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('estoque', {
      produtoID: {
        type: Sequelize.INTEGER,
        primaryKey: false,
        references: {
          model: 'produtos',
          key: 'produtoID'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      },
      quantidade: {
        type: Sequelize.INTEGER,
        allowNull: false
      }
    })
  },

  async down (queryInterface, Sequelize) {
   await queryInterface.dropTable('estoque')
  }
};
