import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Activities from "./components/Activities";
import Header from "./components/Header";
import Services from "./components/Services";
import HomePage from "./pages/Home";
import Login from "./pages/Login";

const App: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true); 
  };
  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div>
      {isLoggedIn && <Header onLogout={handleLogout} />}
      <Routes>
        <Route path="/"
          element={isLoggedIn ? <Navigate to="/home" /> : <Login onLogin={handleLogin} />} />
        <Route path="/home"
          element={isLoggedIn ? <HomePage /> : <Login onLogin={handleLogin} />} />
        <Route path="/services"
          element={isLoggedIn ? <Services /> : <Login onLogin={handleLogin} />} />
        <Route path="/activities"
          element={isLoggedIn ? <Activities /> : <Login onLogin={handleLogin} />} />
      </Routes>
    </div>
  );
};

export default App
