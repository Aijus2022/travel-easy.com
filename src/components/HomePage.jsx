import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="bg-gray-100 h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-blue-600 mb-6">Travel Tech App</h1>
      <div className="space-y-4">
        <input
          type="text"
          placeholder="Search flights, hotels, cars..."
          className="border rounded-lg p-2 w-80"
        />
        <button className="bg-blue-600 text-white p-2 rounded-lg w-80">
          Search
        </button>
      </div>
      <div className="mt-8">
        <h2 className="text-2xl font-semibold text-blue-600">Explore:</h2>
        <div className="space-x-4 mt-2">
          <Link to="/flights" className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700">
            Flights
          </Link>
          <Link to="/hotels" className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700">
            Hotels
          </Link>
          <Link to="/cars" className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700">
            Car Rentals
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
