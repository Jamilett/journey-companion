import React from "react";
import "./../styles/Services.css";

const Services: React.FC = () => {
  const countries = [
    { id: "turkey", name: "Turkiye", image: "turkey.jpg" },
    { id: "japan", name: "Japan", image: "japan.jpg" },
    { id: "mexico", name: "México", image: "mexico.jpg" },
    { id: "paris", name: "Paris", image: "paris.jpg" },
  ];

  return (
    <div className="services">
      <h2>Destinations</h2>
      <ul>
        {countries.map((country) => (
          <li key={country.id} className="country-card">
            <img src={`/images/${country.image}`} alt={country.name} />
            <span>{country.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Services;
