import { Box, Typography } from "@mui/material";
import React from "react";
import { allActivities } from "../api/activities";
import ActivityCard from "../components/ActivityCard";
import BookModal from "../components/BookModal";
import { ActivityFormValues, SelectedActivity } from '../interfaces/Activity';
import "./../styles/Activities.css";

const ActivityPage: React.FC = () => {

  const [selectedActivityName, setSelectedActivityName] = React.useState<string | null>(null);
  const [selectedActivityId, setSelectedActivityId] = React.useState<string | null>(null);

  function handleActivityClick(selectedActivity: SelectedActivity): void {
    console.log('click', selectedActivity);
    setSelectedActivityName(selectedActivity.name);
    setSelectedActivityId(selectedActivity.id);
  }

  const closeModal = () => {
    setSelectedActivityName(null);
    console.log('close', selectedActivityId);
  };

  const postActivity = (formValues: ActivityFormValues) => {
    console.log('post activity', { ...formValues, activity: { name: selectedActivityName, id: selectedActivityId } });
  }

  return (
    <>
      <Box className="activities">
        <Typography variant="h4" color="primary" style={{ fontWeight: "bold" }} > Activities </Typography>
        <Box className="activity-grid">
          {allActivities.map(
            (activity) => (
              <ActivityCard id={activity.id} name={activity.name} imageUrl={`/images/${activity.image}`} onClick={handleActivityClick} />
            ))}
        </Box>
        {selectedActivityName && (
          <BookModal selectedActivity={selectedActivityName} closeModal={closeModal} postActivity={postActivity} />
        )}
      </Box>

    </>
  );
}

export default ActivityPage;