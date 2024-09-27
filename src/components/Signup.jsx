import React, { useState } from 'react';
import { useAuth } from '../AuthContext';
import db from '../dbService'; // Import your dbService

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { signup } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Sign up the user
      const user = await signup(email, password);
      
      // Store user information in the database
      await db.collection('users').doc(user.uid).set({
        email: email,
        createdAt: new Date(),
        // Add any other user info you want to store
      });

    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default Signup;
