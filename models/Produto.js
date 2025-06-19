const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    class Produto extends Model {
        static associate(models) {
          Produto.hasMany(models.Compra, { foreignKey: 'produtoID' });
          Produto.hasMany(models.Estoque, { foreignKey: 'produtoID' });
        }
    }

    Produto.init(
        {
            produtoID: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },
            nome: { type: DataTypes.STRING, allowNull: false },
            marca: { type: DataTypes.STRING, allowNull: false },
            valor: { type: DataTypes.DECIMAL(10, 2), allowNull: false },
            preco_original: { type: DataTypes.DECIMAL(10, 2), allowNull: true },
            preco_pix: { type: DataTypes.DECIMAL(10, 2), allowNull: true },
            preco_parcelado: { type: DataTypes.DECIMAL(10, 2), allowNull: true },
            cor: { type: DataTypes.STRING, allowNull: true },
            tamanhos: { type: DataTypes.STRING, allowNull: true }, 
            imagens:{type: DataTypes.STRING, allowNull: true},
            pasta_imagens: { type: DataTypes.STRING, allowNull: true } 
        },
        {
            sequelize,
            modelName: 'Produto',
            tableName: 'produtos',
            timestamps: false
        }
    );

    return Produto;
};
