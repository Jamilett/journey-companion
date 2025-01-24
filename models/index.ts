import fs from 'fs';
import path from 'path';
import { Sequelize, DataTypes } from 'sequelize';
import { UsuarioModel } from './usuario'; // Ajusta si usas exportaciones predeterminadas

const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require('../config/config.json')[env]; // Configuración para conectar Sequelize

// Inicialización de Sequelize
const sequelize = config.use_env_variable
  ? new Sequelize(process.env[config.use_env_variable] as string, config)
  : new Sequelize(config.database, config.username, config.password, config);

// Interfaz para el contenedor de modelos
interface DB {
  sequelize: Sequelize;
  Usuario: ReturnType<typeof UsuarioModel>;
  [key: string]: any;
}

const db: DB = {
  sequelize,
  Usuario: UsuarioModel(sequelize, DataTypes),
};

// Importar automáticamente otros modelos (si los hay)
fs.readdirSync(__dirname)
  .filter(
    (file) =>
      file.indexOf('.') !== 0 &&
      file !== basename &&
      file.slice(-3) === '.ts' &&
      file.indexOf('.test.ts') === -1
  )
  .forEach((file) => {
    const model = require(path.join(__dirname, file)).default(sequelize, DataTypes);
    db[model.name] = model;
  });

// Configurar asociaciones si los modelos las definen
Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

export default db;
