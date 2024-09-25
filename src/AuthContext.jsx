import React, { createContext, useContext, useState, useEffect } from 'react';
import { onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from './firebase'; // Import firebase auth configuration

// Create the AuthContext
const AuthContext = createContext();

// Custom hook to use AuthContext
export const useAuth = () => useContext(AuthContext);

// AuthProvider component to wrap the app
export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Firebase listener for auth state changes
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false); // Loading complete after auth state is resolved
    });

    // Clean up the listener on unmount
    return () => unsubscribe();
  }, []);

  // Sign up user
  const signup = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Log in user
  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // Log out user
  const logout = () => {
    return signOut(auth);
  };

  // The context value provided to components
  const value = {
    currentUser,
    signup,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children} {/* Render children only after loading is complete */}
    </AuthContext.Provider>
  );
};
