const { Model, DataTypes } = require('sequelize')

module.exports = (sequelize) => {
    class Cliente extends Model{
        static associate(models) {
            Cliente.hasMany(models.Compra, { foreignKey: 'clienteID' });
        }
    }
    Cliente.init(
        {
            clienteID: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false},
            nome: { type: DataTypes.STRING, allowNull: false },
            cpf: { type: DataTypes.STRING, allowNull: false, unique: true },
            data_nascimento: {type: DataTypes.DATE, allowNull: false},
            telefone: { type: DataTypes.STRING, allowNull: false },
            email: {type: DataTypes.STRING, allowNull: false},
            senha: {type: DataTypes.STRING, allowNull: false}
        },
        {
            sequelize,
            modelName: 'Cliente',
            tableName: 'clientes',
            timestamps: false,
        }
    )
    return Cliente;
}