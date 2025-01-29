import Activity from "../models/activityModel"; // Ajusta la ruta según tu estructura de archivos

const defaultActivities = [
  {
    name: "Hiking",
    description: "Explore the mountains and enjoy the views",
    peopleLimit: 10,
    image: "hiking-image-url", // Puedes poner URLs de imágenes predeterminadas
    dates: ["2025-02-01", "2025-02-05", "2025-02-10"],
    times: ["08:00", "09:00", "10:00"],
  },
  {
    name: "Parachuting",
    description: "Fly high and experience freefall",
    peopleLimit: 5,
    image: "parachuting-image-url",
    dates: ["2025-02-02", "2025-02-06", "2025-02-12"],
    times: ["10:00", "14:00", "16:00"],
  },
  {
    name: "Museum",
    description: "Discover art and history",
    peopleLimit: 20,
    image: "museum-image-url",
    dates: ["2025-02-01", "2025-02-03", "2025-02-08"],
    times: ["09:00", "11:00", "15:00"],
  },
  {
    name: "Sightseeing",
    description: "Tour the city’s famous landmarks",
    peopleLimit: 15,
    image: "sightseeing-image-url",
    dates: ["2025-02-04", "2025-02-07", "2025-02-09"],
    times: ["10:00", "12:00", "14:00"],
  },
  {
    name: "Diving",
    description: "Explore the underwater world",
    peopleLimit: 8,
    image: "diving-image-url",
    dates: ["2025-02-01", "2025-02-03", "2025-02-10"],
    times: ["08:00", "12:00", "16:00"],
  },
  {
    name: "Climbing",
    description: "Challenge yourself on the rocks",
    peopleLimit: 6,
    image: "climbing-image-url",
    dates: ["2025-02-05", "2025-02-08", "2025-02-12"],
    times: ["09:00", "11:00", "14:00"],
  },
];

const addDefaultActivities = async () => {
  try {
    // Search for existing activities
    const existingActivities = await Activity.findAll();
    if (existingActivities.length === 0) {
      await Activity.bulkCreate(defaultActivities);
      console.log("Default activities added.");
    } else {
      console.log("Activities already exist in the database.");
    }
  } catch (error) {
    console.error("Error adding default activities:", error);
  }
};

export default addDefaultActivities;