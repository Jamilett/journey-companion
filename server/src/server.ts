import app from "./app";
import sequelize from "./config/database";

const PORT = process.env.PORT || 3000;

(async () => {
  try {
    await sequelize.sync({ force: true }); // Esto borra las tablas y las vuelve a crear, ¡útil durante el desarrollo!
    console.log("Database connected successfully.");

    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
})();