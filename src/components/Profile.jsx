import React from 'react';
import { useAuth } from '../AuthContext'; // Assuming AuthContext provides user and logout
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/login');
    } catch (error) {
      console.error('Failed to log out:', error);
    }
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg text-center">
        <h1 className="text-2xl font-bold mb-4">Your Profile</h1>
        <p className="mb-4">Welcome, {currentUser?.email}</p>
        <button 
          onClick={handleLogout}
          className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition duration-300">
          Logout
        </button>
      </div>
    </div>
  );
};

export default Profile;
