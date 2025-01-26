import React from "react";
import "./../styles/Activities.css";
import { allActivities } from "../api/activities";
import MyCard from "../components/Card";
import { Box } from "@mui/material";

const ActivityPage: React.FC = () => {

  const [selectedActivity, setSelectedActivity] = React.useState<string | null>(null);

  function handleActivityClick(name: string): void {
    console.log('click', name);
    setSelectedActivity(name);
  }

  return (
    <>
      <Box className="activities">
        <h1>Activity Page</h1>

        <div className="activity-grid">
          {allActivities.map(
            (activity) => (
              <MyCard title={activity.name} imageUrl={`/images/${activity.image}`} onClick={handleActivityClick} />
            ))}
        </div>
      </Box>

    </>
  );
}

export default ActivityPage;