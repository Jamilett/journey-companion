import React from "react";
import "@/styles/HomePage.css";
import { Typography } from "@mui/material";

const Home: React.FC = () => {
  return (
    <div className="homepage">
      <header>
        <Typography variant="h3" color="primary" style={{ fontWeight: "bold" }} >Journey Companion</Typography>
        <p className="slogan">
          "Travel, connect, share your <span>destination</span>, your <span>passions</span>, your <span>community</span>."
        </p>
      </header>

      <section className="features">
        <div className="feature">
          <img src="/images/discover.jpg" alt="Discover" />
          <h3>Discover New Destinations</h3>
          <p>Explore hidden gems and connect with locals around the world.</p>
        </div>
        <div className="feature">
          <img src="/images/connect.jpg" alt="Connect" />
          <h3>Connect with Others</h3>
          <p>Join like-minded travelers and share unforgettable experiences.</p>
        </div>
        <div className="feature">
          <img src="/images/share.jpg" alt="Share" />
          <h3>Share Your Journey</h3>
          <p>Create memories and inspire others by sharing your adventures.</p>
        </div>
      </section>
    </div>


  );
};

export default Home;