import React from "react";
import { useParams } from "react-router-dom";

const destinations = {
  turkey: {
    name: "Turkey",
    image: "/images/turkey.jpg",
    description: "Explore the beauty of Turkey, with its rich history and stunning architecture.",
  },
  japan: {
    name: "Japan",
    image: "/images/japan.jpg",
    description: "Discover the cherry blossoms, temples, and modern cities of Japan.",
  },
  mexico: {
    name: "Mexico",
    image: "/images/mexico.jpg",
    description: "Visit the pyramids, beaches, and vibrant culture of Mexico.",
  },
  paris: {
    name: "Paris",
    image: "/images/paris.jpg",
    description: "Experience the romance, art, and iconic Eiffel Tower in Paris.",
  },
};

const DestinationPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const destination = destinations[id as keyof typeof destinations];

  if (!destination) {
    return <h2>Destination not found</h2>;
  }

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>{destination.name}</h1>
      <img
        src={destination.image}
        alt={destination.name}
        style={{ width: "80%", borderRadius: "10px", marginBottom: "20px" }}
      />
      <p>{destination.description}</p>
    </div>
  );
};

export default DestinationPage;
