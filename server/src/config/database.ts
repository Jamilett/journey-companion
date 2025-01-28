import { Sequelize } from "sequelize-typescript";
import dotenv from "dotenv";
import User from "../models/userModel";
import Activity from "../models/activityModel";

dotenv.config();

const sequelize = new Sequelize({
  dialect: "postgres",
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  models: [User, Activity],
});

export default sequelize;