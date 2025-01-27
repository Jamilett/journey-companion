import React, { FormEvent } from "react";
import { allActivities, myActivities } from "../api/activities";
import { countries } from "../api/countries";
import { ActivityFormValues, BookModalProps } from '../interfaces/Activity';
import "./../styles/Activities.css";

const BookModal: React.FC<BookModalProps> = ({ selectedActivity, closeModal, postActivity }) => {

  const [successMessage, setSuccessMessage] = React.useState<boolean>(false);
  const [formValues, setFormValues] = React.useState<ActivityFormValues>({
    name: "",
    middleName: "",
    lastName: "",
    country: "",
    date: "",
    time: "",
  });

  function handleFormSubmit(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    setSuccessMessage(true);
    postActivity(formValues);
  }

  function handleCloseModal(): void {
    setSuccessMessage(false);
    closeModal();
  }

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

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
                    onChange={handleInputChange}
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
                    onChange={handleInputChange}
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
                    onChange={handleInputChange}
                    pattern="[A-Za-z]+"
                    title="Please enter letters only"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="country">Country:</label>
                  <select id="country" name="country" onChange={handleInputChange} required>
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
                  <select id="date" name="date" onChange={handleInputChange} required>
                    <option value="" disabled selected>
                      Select a date
                    </option>
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
                  <select id="time" name="time" onChange={handleInputChange} required>
                    <option value="" disabled selected>
                      Select a time
                    </option>
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