import { Box, Typography } from "@mui/material";
import React from "react";
import { myActivities } from "../api/activities";
import "./../styles/MyActivity.css";

const MyActivityCard: React.FC = () => {

  const getActivities = () => {
    // get activities from the database
    console.log(myActivities)
    // return activities
  }

  return (
    <Box className="services">
      <Typography variant="h2" color="primary" style={{ fontWeight: "bold" }}>My Activities</Typography>
      <ul>
        {myActivities.map((activity) => (
          <li key={activity.selectedActivity?.id} className="country-card">
            <img src={`/images/${activity.image}`} alt={activity.selectedActivity?.name} />
            <Box className="country-info">
              <Typography variant="h6"> Name: {activity.selectedActivity?.name} </Typography>
              <Typography variant="h6"> Day: {activity.date} </Typography>
              <Typography variant="h6"> Time: {activity.time} </Typography>
            </Box>
          </li>
        ))}
      </ul>
    </Box>
  );
};

export default MyActivityCard;
