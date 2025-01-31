import { Sequelize } from "sequelize";

const sequelize = new Sequelize(process.env.DATABASE_URL as string, {
  dialect: "postgres",
  dialectOptions: {
    ssl: {
      require: true, // Render requiere SSL para PostgreSQL
      rejectUnauthorized: false,
    },
  },
});

export default sequelize;