const { Model, DataTypes } = require('sequelize')

module.exports = (sequelize) => {
    class Compra extends Model{
        static associate(models) {
            Compra.belongsTo(models.Cliente, {foreignKey: 'clienteID'})
            Compra.belongsTo(models.Produto, {foreignKey: 'produtoID'})
        }
    }
    Compra.init(
        {
            compraID: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false},
            produtoID: { type: DataTypes.INTEGER, allowNull: false, references: { model: 'produtos', key: 'produtoID' } },
            clienteID: { type: DataTypes.INTEGER, allowNull: false, references: { model: 'clientes', key: 'clienteID' } }
            
        },
        {
            sequelize,
            modelName: 'Compra',
            tableName: 'compras',
            timestamps: false,
        }
    )
    return Compra;
}