import { Sequelize, DataTypes, Model, Optional } from 'sequelize';

// Definimos los atributos del modelo Usuario
interface UsuarioAttributes {
  id: number;
  nombre: string;
  email: string;
  password: string;
}

// Especificamos los atributos opcionales para la creación
interface UsuarioCreationAttributes extends Optional<UsuarioAttributes, 'id'> {}

// Extendemos la clase `Model` de Sequelize
class Usuario
  extends Model<UsuarioAttributes, UsuarioCreationAttributes>
  implements UsuarioAttributes
{
  public id!: number;
  public nombre!: string;
  public email!: string;
  public password!: string;

  // Timestamps automáticos
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;

  // Definimos asociaciones si las hay
  static associate(models: any) {
    // Ejemplo: Usuario.hasMany(models.Post, { foreignKey: 'userId' });
  }
}

// Inicialización del modelo
const initUsuarioModel = (sequelize: Sequelize) => {
  Usuario.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      nombre: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: 'El nombre no puede estar vacío',
          },
        },
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: {
            msg: 'Debe ser un correo electrónico válido',
          },
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: {
            args: [6, 100],
            msg: 'La contraseña debe tener entre 6 y 100 caracteres',
          },
        },
      },
    },
    {
      sequelize,
      modelName: 'Usuario',
      tableName: 'Usuarios',
      timestamps: true, // Incluye automáticamente createdAt y updatedAt
      paranoid: true, // Habilita soft deletes (marca registros como eliminados en lugar de borrarlos)
      underscored: true, // Usa snake_case en lugar de camelCase para los nombres de columnas
    }
  );

  return Usuario;
};

export { Usuario, initUsuarioModel };