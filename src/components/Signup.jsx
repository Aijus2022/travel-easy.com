import React, { useRef, useState } from 'react';
import { useAuth } from '../AuthContext'; // Assuming AuthContext provides signup function
import { useNavigate, Link } from 'react-router-dom';

const Signup = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signup } = useAuth();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError('Passwords do not match');
    }

    try {
      setError('');
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
      navigate('/profile');
    } catch (error) {
      setError('Failed to create an account');
    }

    setLoading(false);
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg text-center">
        <h1 className="text-2xl font-bold mb-4">Sign Up</h1>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            ref={emailRef}
            required
            placeholder="Email"
            className="border rounded-lg p-2 w-full"
          />
          <input
            type="password"
            ref={passwordRef}
            required
            placeholder="Password"
            className="border rounded-lg p-2 w-full"
          />
          <input
            type="password"
            ref={passwordConfirmRef}
            required
            placeholder="Confirm Password"
            className="border rounded-lg p-2 w-full"
          />
          <button
            disabled={loading}
            className="bg-blue-500 text-white py-2 px-4 rounded-lg w-full hover:bg-blue-600 transition duration-300"
          >
            Sign Up
          </button>
        </form>
        <p className="mt-4">
          Already have an account?{' '}
          <Link to="/login" className="text-blue-500 hover:underline">
            Log In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;

