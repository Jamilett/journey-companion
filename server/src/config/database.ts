import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config(); // Cargar variables de entorno

const sequelize = new Sequelize(
  process.env.DB_NAME!,      // Nombre de la base de datos
  process.env.DB_USER!,      // Usuario
  process.env.DB_PASSWORD!,  // Contraseña
  {
    host: process.env.DB_HOST || 'localhost', // Host de la base de datos
    dialect: 'postgres',                      // Especificamos PostgreSQL
    logging: false,                           // Deshabilitar logs de SQL
  }
);

export default sequelize;