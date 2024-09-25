import React from "react";

const FlightsSearch = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <h1 className="text-3xl font-bold text-blue-600 mb-4">Search Flights</h1>
      <form className="bg-white p-6 rounded-lg shadow-md">
        <div className="mb-4">
          <label className="block text-gray-700">Departure City</label>
          <input type="text" className="border rounded-lg p-2 w-full" placeholder="Enter city" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Arrival City</label>
          <input type="text" className="border rounded-lg p-2 w-full" placeholder="Enter city" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Departure Date</label>
          <input type="date" className="border rounded-lg p-2 w-full" />
        </div>
        <button className="bg-blue-600 text-white p-2 rounded-lg w-full hover:bg-blue-700">Search Flights</button>
      </form>
    </div>
  );
};

export default FlightsSearch;
