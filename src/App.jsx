import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import FlightsSearch from './components/FlightsSearch';
import HotelsSearch from './components/HotelsSearch';
import CarRentalSearch from './components/CarRentalSearch';
import Login from './components/Login';
import Profile from './components/Profile';
import Signup from './components/Signup';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/flights" element={<FlightsSearch />} />
      <Route path="/hotels" element={<HotelsSearch />} />
      <Route path="/cars" element={<CarRentalSearch />} />
      <Route path="/login" element={<Login />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/signup" element={<Signup />} />
      
      </Routes>
  );
};

export default App;
