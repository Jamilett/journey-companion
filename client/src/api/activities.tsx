import { Activity, ActivityFormValues } from "../interfaces/Activity";

export const allActivities: Activity[] = [
  {
    id: "hiking",
    name: "Hiking",
    image: "hiking.jpg",
    dates: ["2025-01-30", "2025-02-01", "2025-02-03"],
    times: ["09:00", "11:00", "15:00"],
  },
  {
    id: "museum",
    name: "Museum",
    image: "museum.jpg",
    dates: ["2025-02-01", "2025-02-05"],
    times: ["10:00", "14:00", "16:00"],
  },
  {
    id: "parachuting",
    name: "Parachuting",
    image: "parachuting.jpg",
    dates: ["2025-01-29", "2025-02-02"],
    times: ["08:00", "12:00", "17:00"],
  },
  {
    id: "sightseeing",
    name: "Sightseeing",
    image: "sightseeing.jpg",
    dates: ["2025-02-10", "2025-02-12"],
    times: ["09:30", "13:00", "16:30"],
  },
  {
    id: "diving",
    name: "Diving",
    image: "diving.jpg",
    dates: ["2025-01-31", "2025-02-04"],
    times: ["08:30", "12:30", "15:30"],
  },
  {
    id: "climbing",
    name: "Climbing",
    image: "climbing.jpg",
    dates: ["2025-02-07", "2025-02-09"],
    times: ["10:00", "14:00", "18:00"],
  },
];


export const myActivities: ActivityFormValues[] = [
  {
    name: "Hiking",
    lastName: "Doe",
    country: "Mexico",
    image: "hiking.jpg",
    date: "2025-01-30",
    time: "09:00",
    selectedActivity: { name: "Hiking", id: "hiking" }
  },
  {
    name: "Sightseeing",
    lastName: "Doe",
    country: "Mexico",
    image: "sightseeing.jpg",
    date: "2025-01-30",
    time: "09:00",
    selectedActivity: { name: "Sightseeing", id: "sightseeing" }
  }
];