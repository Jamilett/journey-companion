"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initUsuarioModel = exports.Usuario = void 0;
const sequelize_1 = require("sequelize");
// Extendemos la clase `Model` de Sequelize
class Usuario extends sequelize_1.Model {
    // Definimos asociaciones si las hay
    static associate(models) {
        // Ejemplo: Usuario.hasMany(models.Post, { foreignKey: 'userId' });
    }
}
exports.Usuario = Usuario;
// Inicialización del modelo
const initUsuarioModel = (sequelize) => {
    Usuario.init({
        id: {
            type: sequelize_1.DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        nombre: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: {
                    msg: 'El nombre no puede estar vacío',
                },
            },
        },
        email: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: {
                    msg: 'Debe ser un correo electrónico válido',
                },
            },
        },
        password: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
            validate: {
                len: {
                    args: [6, 100],
                    msg: 'La contraseña debe tener entre 6 y 100 caracteres',
                },
            },
        },
    }, {
        sequelize,
        modelName: 'Usuario',
        tableName: 'Usuarios',
        timestamps: true, // Incluye automáticamente createdAt y updatedAt
        paranoid: true, // Habilita soft deletes (marca registros como eliminados en lugar de borrarlos)
        underscored: true, // Usa snake_case en lugar de camelCase para los nombres de columnas
    });
    return Usuario;
};
exports.initUsuarioModel = initUsuarioModel;
//# sourceMappingURL=usuario.js.map