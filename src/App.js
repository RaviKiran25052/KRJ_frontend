import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './Components/Pages/Homepage';
import ElevatorShowcase from './Components/Products/ElevatorShowcase ';
import Navbar from './Components/Navbar';
import EliteElevatorsFooter from './Components/Homepage/EliteElevatorsFooter ';
// Remove the HeroSection import

const App = () => {
  return (
    <Router>
      <div className="App">
        {/* Add your navigation bar or header here */}
        <Navbar />
        {/* Remove the HeroSection from here */}
        {/* Define Routes */}
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/elevators" element={<ElevatorShowcase />} />
        </Routes>
        <EliteElevatorsFooter />
      </div>
    </Router>
  );
}

export default App;