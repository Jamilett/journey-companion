import app from "./app";
import sequelize from "./config/database";
import addDefaultActivities from "./seeds/activitySeeds";

const PORT = process.env.PORT || 3000;

(async () => {
  try {
    await sequelize.sync({ force: true });
    console.log("Database connected successfully.");

    await addDefaultActivities();
    
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
})();