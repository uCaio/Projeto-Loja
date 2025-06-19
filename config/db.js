const { Sequelize } = require('sequelize')

// Criando a instância do Sequelize
const sequelize = new Sequelize('database_loja', 'root', 'admin', {
    host: 'localhost',
    dialect: 'mysql',
    logging: false
})

// Inicialização dos modelos
const Cliente = require('../models/Cliente')(sequelize);
const Produto = require('../models/Produto')(sequelize);
const Compra = require('../models/Compra')(sequelize);
const Estoque = require('../models/Estoque')(sequelize);

const models = { Cliente, Produto, Compra, Estoque}

// Registros das associações
Object.values(models).forEach((model) => {
    if (model.associate) {
        model.associate(models);
    }
});

module.exports = {
    sequelize,
    models
}
  