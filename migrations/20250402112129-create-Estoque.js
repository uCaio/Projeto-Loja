'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('estoques', {
      produtoID: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      quantidade: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      localizacao: {
        type: Sequelize.STRING,
        allowNull: true
      },
      data_atualizacao: {
        type: Sequelize.DATE,
        allowNull: true,
        defaultValue: Sequelize.fn('NOW')
      }
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('estoques');
  }
};
