const { Model, DataTypes } = require('sequelize')

module.exports = (sequelize) => {
    class Produto extends Model{
        static associate(models) {
            Produto.hasMany(models.Compra, { foreignKey: 'produtoID' });
        }
    }
    Produto.init(
        {
            produtoID: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false},
            nome: { type: DataTypes.STRING, allowNull: false },
            valor: {type: DataTypes.FLOAT, allowNull: false},
            marca: {type: DataTypes.STRING, allowNull: false},
        },
        {
            sequelize,
            modelName: 'Produto',
            tableName: 'produtos',
            timestamps: false,
        }
    )
    return Produto;
}