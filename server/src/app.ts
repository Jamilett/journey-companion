import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import userRoutes from "./routes/userRoutes";

const app = express();

app.use(cors());
app.use(bodyParser.json());

// Rutas de usuarios
app.use("/users", userRoutes);

export default app;