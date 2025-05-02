'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('produtos', {
      produtoID: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true, 
        allowNull: false
      },
      nome: {
        type: Sequelize.STRING,
        allowNull: false
      },
      marca: {
        type: Sequelize.STRING,
        allowNull: false
      },
      valor: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      preco_original: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: true
      },
      preco_pix: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false
      },
      preco_parcelado: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false
      },
      cor: {
        type: Sequelize.STRING,
        allowNull: true
      },
      tamanhos: {
        type: Sequelize.STRING,
        allowNull: true // Ex: '37,38,39'
      },
      imagens: {
        type: Sequelize.STRING,
        allowNull: true
      },
      pasta_imagens: {
        type: Sequelize.STRING,
        allowNull: true // Ex: 'img1.jpg,img2.jpg'
      }
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('produtos');
  }
};
