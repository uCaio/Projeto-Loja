const { Model, DataTypes } = require('sequelize')


module.exports = (sequelize) => {
    class Estoque extends Model {
        static associate(models) {
            Estoque.belongsTo(models.Produto, { foreignKey: 'produtoID' });
        }
    }
    Estoque.init(
        {
            produtoID: { type: DataTypes.INTEGER,primaryKey: true ,allowNull: false},
            quantidade: { type: DataTypes.INTEGER, allowNull: false },
            localizacao: { type: DataTypes.STRING, allowNull: true },
            data_atualizacao: { type: DataTypes.DATE, allowNull: false, defaultValue: DataTypes.NOW }
        },
        {
            sequelize,
            modelName: 'Estoque',
            tableName: 'estoques',
            timestamps: false,
        }
    )
    return Estoque;
}