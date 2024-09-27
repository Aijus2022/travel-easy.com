import React from "react";

const CarRentalSearch = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <h1 className="text-3xl font-bold text-blue-600 mb-4">Search Car Rentals</h1>
      <form className="bg-white p-6 rounded-lg shadow-md">
        <div className="mb-4">
          <label className="block text-gray-700">Pick-up Location</label>
          <input type="text" className="border rounded-lg p-2 w-full" placeholder="Enter location" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Pick-up Date</label>
          <input type="date" className="border rounded-lg p-2 w-full" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Drop-off Date</label>
          <input type="date" className="border rounded-lg p-2 w-full" />
        </div>
        <button className="bg-blue-600 text-white p-2 rounded-lg w-full hover:bg-blue-700">Search Cars</button>
      </form>
    </div>
  );
};

export default CarRentalSearch;
