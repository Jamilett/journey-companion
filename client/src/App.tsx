import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Homepage from "./components/HomePage";
import Services from "./components/Services";
import Activities from "./components/Activities";

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/services" element={<Services />} />
        <Route path="/activities" element={<Activities />} />
      </Routes>
    </div>
  );
};

export default App;