'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Produtos', [
      {
        nome: 'Tênis Nike Air Max 97 Masculino',
        marca: 'Nike',
        valor: 800.00,
        preco_original: 1500.00,
        preco_pix: 800.00,
        preco_parcelado: 950.00,
        cor: 'Preto e Branco',
        tamanhos: '37,38,39,40,41,42',
        imagens: 'nike-air-max-97-1.avif,nike-air-max-97-2.avif,nike-air-max-97-3.avif,nike-air-max-97-4.avif',
        pasta_imagens: 'tenis-masculino/nike/air-max-97'
      },
      {
        nome: 'Tênis Nike TN Masculino',
        marca: 'Nike',
        valor: 850.00,
        preco_original: 1600.00,
        preco_pix: 850.00,
        preco_parcelado: 1000.00,
        cor: 'Azul e Preto',
        tamanhos: '38,39,40,41,42,43',
        imagens: 'nike-tn-1.avif,nike-tn-2.avif,nike-tn-3.avif',
        pasta_imagens: 'tenis-masculino/nike/nike-tn'
      },
      {
        nome: 'Tênis Nike Structure 25 Feminino',
        marca: 'Nike',
        valor: 650.00,
        preco_original: 1200.00,
        preco_pix: 650.00,
        preco_parcelado: 750.00,
        cor: 'Preto e Branco',
        tamanhos: '35,36,37,38,39',
        imagens: 'nike-structure-1.avif,nike-structure-2.avif,nike-structure-3.avif',
        pasta_imagens: 'tenis-feminino/nike/nike-structure'
      },
      {
        nome: 'Tênis Nike Court Vision Feminino',
        marca: 'Nike',
        valor: 550.00,
        preco_original: 1000.00,
        preco_pix: 550.00,
        preco_parcelado: 650.00,
        cor: 'Branco',
        tamanhos: '35,36,37,38,39,40',
        imagens: 'nike-court-vision-1.avif,nike-court-vision-2.avif,nike-court-vision-3.avif',
        pasta_imagens: 'tenis-feminino/nike/nike-court-vision'
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Produtos', null, {});
  }
};
