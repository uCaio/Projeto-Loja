'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('estoques', [
      {
        produtoID: 1,
        quantidade: 10,
        localizacao: 'A1',
        data_atualizacao: new Date()
      },
      {
        produtoID: 2,
        quantidade: 8,
        localizacao: 'B3',
        data_atualizacao: new Date()
      },
      {
        produtoID: 3,
        quantidade: 12,
        localizacao: 'C2',
        data_atualizacao: new Date()
      },
      {
        produtoID: 4,
        quantidade: 20,
        localizacao: 'D4',
        data_atualizacao: new Date()
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('estoques', null, {});
  }
};
