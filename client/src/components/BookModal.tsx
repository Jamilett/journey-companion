import React, { FormEvent } from "react";
import "./../styles/Activities.css";
import { countries } from "../api/countries";
import { allActivities } from "../api/activities";

interface BookModalProps {
  selectedActivity: string | null;
  closeModal: () => void;
}

const BookModal: React.FC<BookModalProps> = ({ selectedActivity, closeModal }) => {

  const [successMessage, setSuccessMessage] = React.useState<boolean>(false);

  function handleFormSubmit(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    setSuccessMessage(true);
  }

  function handleCloseModal(): void {
    setSuccessMessage(false);
    closeModal();
  }

  return (
    <>
      <div className="modal">
        <div className="modal-content">
          <button className="modal-close" onClick={handleCloseModal}>
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
                  <button type="button" onClick={handleCloseModal}>
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
        <div className="modal-overlay" onClick={handleCloseModal}></div>
      </div>
    </>
  );
}

export default BookModal;