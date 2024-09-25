import React, { useRef, useState } from 'react';
import { useAuth } from '../AuthContext'; // Assuming AuthContext provides login
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setError('');
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      navigate('/profile');
    } catch (error) {
      setError('Failed to log in');
    }

    setLoading(false);
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg text-center">
        <h1 className="text-2xl font-bold mb-4">Log In</h1>
        {error && <p className="text-red-500">{error}</p>}
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
          <button
            disabled={loading}
            className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300 w-full"
          >
            Log In
          </button>
        </form>
        <p className="mt-4">
          Need an account?{' '}
          <Link to="/signup" className="text-blue-500">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
