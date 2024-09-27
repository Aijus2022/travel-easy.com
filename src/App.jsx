import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import FlightsSearch from './components/FlightsSearch';
import HotelsSearch from './components/HotelsSearch';
import CarRentalSearch from './components/CarRentalSearch';


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/flights" element={<FlightsSearch />} />
      <Route path="/hotels" element={<HotelsSearch />} />
      <Route path="/cars" element={<CarRentalSearch />} />
      </Routes>
  );
};

export default App;
