import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import userRoutes from "./routes/userRoutes";
import activityRoutes from "./routes/activityRoutes";

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use("/users", userRoutes);
app.use("/activities", activityRoutes);

export default app;