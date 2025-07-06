'use client';
import React, { createContext, useState, useContext, useEffect } from 'react';
import { 
  auth,
} from '@/firebase/config';
import { 
  onAuthStateChanged, 
  GoogleAuthProvider, 
  signInWithPopup, 
  signOut as firebaseSignOut 
} from 'firebase/auth';

// Create auth context
const AuthContext = createContext();

// Custom hook to use the auth context
export function useAuth() {
  return useContext(AuthContext);
}

// Provider component to wrap the app and make auth object available to any child component
export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // Google sign-in
  const signInWithGoogle = async () => {
    setError('');
    try {
      const provider = new GoogleAuthProvider();
      // Add calendar-specific scopes for Google Calendar access
      provider.addScope('https://www.googleapis.com/auth/calendar');
      provider.addScope('https://www.googleapis.com/auth/calendar.events');
      
      const result = await signInWithPopup(auth, provider);
      
      // You can extract additional access tokens for Google APIs here
      // const credential = GoogleAuthProvider.credentialFromResult(result);
      // const token = credential.accessToken;
      
      return result.user;
    } catch (error) {
      setError(`Authentication failed: ${error.message}`);
      console.error("Google sign-in error:", error);
      throw error;
    }
  };

  // Sign out
  const signOut = async () => {
    setError('');
    try {
      await firebaseSignOut(auth);
    } catch (error) {
      setError(`Sign out failed: ${error.message}`);
      console.error("Sign out error:", error);
      throw error;
    }
  };

  // Subscribe to user on auth state change
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });
    // Cleanup subscription
    return unsubscribe;
  }, []);

  // Context value
  const value = {
    currentUser,
    signInWithGoogle,
    signOut,
    error
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}