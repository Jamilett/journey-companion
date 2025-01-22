import React, { useState } from "react";
import "./../styles/Activities.css";

const Activities: React.FC = () => {
  const allActivities = [
    { id: "hiking", name: "Hiking", image: "hiking.jpg" },
    { id: "museum", name: "Museum", image: "museum.jpg" },
    { id: "parachuting", name: "Parachuting", image: "parachuting.jpg" },
    { id: "sightseeing", name: "Sightseeing", image: "sightseeing.jpg" },
    { id: "diving", name: "Diving", image: "diving.jpg" },
    { id: "climbing", name: "Climbing", image: "climbing.jpg" },
  ];

  const [activities, setActivities] = useState(allActivities);


  const sortAlphabetically = () => {
    const sorted = [...activities].sort((a, b) => a.name.localeCompare(b.name));
    setActivities(sorted);
  };


  const resetOrder = () => {
    setActivities(allActivities);
  };

  return (
    <div className="activities">
      <header>
        <h2>Activities</h2>
        <div className="subheader">
          <div className="filters">
            <button className="filter-btn" onClick={resetOrder}>
              Default
            </button>
            <button className="filter-btn" onClick={sortAlphabetically}>
              A-Z
            </button>
          </div>
        </div>
      </header>
      <div className="activity-grid">
        {activities.map((activity) => (
          <div key={activity.id} className="activity-card">
            <img src={`/images/${activity.image}`} alt={activity.name} />
            <span>{activity.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Activities;
