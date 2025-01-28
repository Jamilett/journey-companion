import { Sequelize } from "sequelize-typescript";
import dotenv from "dotenv";
import path from "path";

dotenv.config(); // Cargar variables de entorno

const sequelize = new Sequelize({
  database: process.env.DB_NAME,
  dialect: "postgres",
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  models: [path.resolve(__dirname, '../models/*.ts')], // Verifica que la ruta sea correcta
});

export default sequelize;