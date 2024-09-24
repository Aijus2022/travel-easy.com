import React, { useState, useEffect } from 'react';
import { addItinerary, getItineraries } from '../dbService';
import { useAuth } from '../AuthContext';

const Profile = () => {
  const [itinerary, setItinerary] = useState('');
  const { currentUser } = useAuth();
  const [savedItineraries, setSavedItineraries] = useState([]);
  const [message, setMessage] = useState('');

  const handleSaveItinerary = async () => {
    try {
      await addItinerary({
        userId: currentUser.uid,
        itinerary,
      });
      setMessage('Itinerary saved successfully!');
      fetchItineraries(); // Fetch the updated itineraries
    } catch (error) {
      console.error(error);
      setMessage('Failed to save itinerary');
    }
  };

  const fetchItineraries = async () => {
    const itineraries = await getItineraries();
    setSavedItineraries(itineraries.filter(i => i.userId === currentUser.uid));
  };

  useEffect(() => {
    fetchItineraries();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl mb-6">Welcome, {currentUser.email}</h1>
      <textarea
        value={itinerary}
        onChange={(e) => setItinerary(e.target.value)}
        placeholder="Enter your itinerary details..."
        className="border rounded-lg p-2 w-80 h-40 mb-4"
      />
      <button onClick={handleSaveItinerary} className="bg-blue-600 text-white p-2 rounded-lg w-80">
        Save Itinerary
      </button>
      {message && <p className="mt-4">{message}</p>}
      <h2 className="text-2xl mt-6">Your Saved Itineraries</h2>
      <ul className="mt-4 space-y-2">
        {savedItineraries.map((itinerary, index) => (
          <li key={index} className="border p-2 rounded-lg w-80">
            {itinerary.itinerary}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Profile;


