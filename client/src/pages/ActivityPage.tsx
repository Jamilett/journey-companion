import { Box, Typography } from "@mui/material";
import React from "react";
import { allActivities } from "../api/activities";
import ActivityCard from "../components/ActivityCard";
import "./../styles/Activities.css";
import BookModal from "../components/BookModal";

const ActivityPage: React.FC = () => {

  const [selectedActivity, setSelectedActivity] = React.useState<string | null>(null);

  function handleActivityClick(name: string): void {
    console.log('click', name);
    setSelectedActivity(name);
  }

  const closeModal = () => {
    setSelectedActivity(null);
    console.log('close', selectedActivity);
  };

  return (
    <>
      <Box className="activities">
        <Typography variant="h4"> Activities </Typography>
        <Box className="activity-grid">
          {allActivities.map(
            (activity) => (
              <ActivityCard title={activity.name} imageUrl={`/images/${activity.image}`} onClick={handleActivityClick} />
            ))}
        </Box>
        {selectedActivity && (
          <BookModal selectedActivity={selectedActivity} closeModal={closeModal} />
        )}
      </Box>

    </>
  );
}

export default ActivityPage;