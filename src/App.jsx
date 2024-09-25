import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import FlightsSearch from './components/FlightsSearch';
import HotelsSearch from './components/HotelsSearch';
import CarRentalSearch from './components/CarRentalSearch';
import Profile from './components/Profile';
import Signup from './components/Signup';
import Login from './components/Login';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/flights" element={<FlightsSearch />} />
      <Route path="/hotels" element={<HotelsSearch />} />
      <Route path="/cars" element={<CarRentalSearch />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default App;
