import React, { useState } from "react";
import "./../styles/Activities.css";

const Activities: React.FC = () => {

  const countries = ["Turkey", "Japan", "Mexico", "France"];

  const allActivities = [
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

  const [selectedActivity, setSelectedActivity] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<boolean>(false);

  const handleActivityClick = (activityName: string) => {
    setSelectedActivity(activityName);
    setSuccessMessage(false);
  };

  const handleFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setSuccessMessage(true);
  };

  const closeModal = () => {
    setSelectedActivity(null);
    setSuccessMessage(false);
  };

  return (
    <div className="activities">
      <header>
        <h2>Activities</h2>
      </header>
      <div className="activity-grid">
        {allActivities.map((activity) => (
          <div
            key={activity.id}
            className="activity-card"
            onClick={() => handleActivityClick(activity.name)}
          >
            <img src={`/images/${activity.image}`} alt={activity.name} />
            <span>{activity.name}</span>
          </div>
        ))}
      </div>

      {selectedActivity && (
        <div className="modal">
          <div className="modal-content">
            <button className="modal-close" onClick={closeModal}>
              &times;
            </button>
            {successMessage ? (
              <div className="success-message">
                <div className="success-icon">✔️</div>
                <h3>Success!</h3>
                <p>Your activity has been successfully reserved.</p>
              </div>
            ) : (
              <div>
                <h3>Register for {selectedActivity}</h3>
                <form onSubmit={handleFormSubmit}>
                  <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      pattern="[A-Za-z]+"
                      title="Please enter letters only"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="middleName">Middle Name:</label>
                    <input
                      type="text"
                      id="middleName"
                      name="middleName"
                      pattern="[A-Za-z]*"
                      title="Please enter letters only"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="lastName">Last Name:</label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      pattern="[A-Za-z]+"
                      title="Please enter letters only"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="country">Country:</label>
                    <select id="country" name="country" required>
                      <option value="" disabled selected>
                        Select a country
                      </option>
                      {countries.map((country) => (
                        <option key={country} value={country}>
                          {country}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="date">Date:</label>
                    <select id="date" name="date" required>
                      {allActivities
                        .find((activity) => activity.name === selectedActivity)
                        ?.dates.map((date) => (
                          <option key={date} value={date}>
                            {date}
                          </option>
                        ))}
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="time">Time:</label>
                    <select id="time" name="time" required>
                      {allActivities
                        .find((activity) => activity.name === selectedActivity)
                        ?.times.map((time) => (
                          <option key={time} value={time}>
                            {time}
                          </option>
                        ))}
                    </select>
                  </div>
                  <div className="modal-buttons">
                    <button type="submit">Submit</button>
                    <button type="button" onClick={closeModal}>
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
          <div className="modal-overlay" onClick={closeModal}></div>
        </div>
      )}
    </div>
  );
};

export default Activities;
