// src/contexts/NextAuthContext.jsx
import React, { createContext, useState, useContext, useEffect, useCallback } from 'react';
import { SCOPES } from '../auth/next-auth';

// Create the auth context
const NextAuthContext = createContext(null);

export function useNextAuth() {
  return useContext(NextAuthContext);
}

export function NextAuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [accessToken, setAccessToken] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  // Google OAuth client library initialization
  const initializeGoogleAuth = useCallback(async () => {
    try {
      if (!window.google) {
        // Load the Google API client library
        const script = document.createElement('script');
        script.src = 'https://accounts.google.com/gsi/client';
        script.async = true;
        script.defer = true;
        document.head.appendChild(script);

        await new Promise((resolve, reject) => {
          script.onload = resolve;
          script.onerror = () => reject(new Error('Failed to load Google API client'));
        });
      }
      
      // Check for existing session in localStorage
      const storedSession = localStorage.getItem('nextauth_session');
      if (storedSession) {
        try {
          const parsedSession = JSON.parse(storedSession);
          if (parsedSession && parsedSession.expiresAt > Date.now()) {
            setUser(parsedSession.user);
            setAccessToken(parsedSession.accessToken);
          } else {
            // Session expired, clear it
            localStorage.removeItem('nextauth_session');
          }
        } catch (e) {
          console.error('Error parsing stored session:', e);
          localStorage.removeItem('nextauth_session');
        }
      }
      
      setLoading(false);
    } catch (error) {
      console.error('Error initializing Google Auth:', error);
      setError('Failed to initialize authentication');
      setLoading(false);
    }
  }, []);

  // Initialize Google Auth on component mount
  useEffect(() => {
    initializeGoogleAuth();
  }, [initializeGoogleAuth]);

  // Handle Google Sign In
  const signIn = useCallback(async () => {
    try {
      setError(null);
      
      // Get Google client ID from environment variables
      const clientId = import.meta.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID;
      if (!clientId) {
        throw new Error('Google Client ID not found. Check your environment variables.');
      }

      // Initialize Google OAuth client
      const client = window.google?.accounts.oauth2.initTokenClient({
        client_id: clientId,
        scope: SCOPES.join(' '),
        callback: (response) => {
          if (response.error) {
            setError(response.error);
            return;
          }

          // Get user info using the access token
          fetch('https://www.googleapis.com/oauth2/v3/userinfo', {
            headers: {
              Authorization: `Bearer ${response.access_token}`
            }
          })
            .then(res => res.json())
            .then(userData => {
              const user = {
                id: userData.sub,
                name: userData.name,
                email: userData.email,
                image: userData.picture
              };
              
              // Store session with expiry (1 hour from now)
              const session = {
                user,
                accessToken: response.access_token,
                expiresAt: Date.now() + 3600000 // 1 hour
              };
              
              localStorage.setItem('nextauth_session', JSON.stringify(session));
              setUser(user);
              setAccessToken(response.access_token);
            })
            .catch(err => {
              console.error('Error fetching user info:', err);
              setError('Failed to get user information');
            });
        }
      });

      if (client) {
        client.requestAccessToken();
      } else {
        throw new Error('Google OAuth client failed to initialize');
      }
    } catch (error) {
      console.error('Sign in error:', error);
      setError(error.message || 'Failed to sign in');
    }
  }, []);

  // Handle Sign Out
  const signOut = useCallback(() => {
    // Remove session from localStorage
    localStorage.removeItem('nextauth_session');
    
    // Reset state
    setUser(null);
    setAccessToken(null);
    
    // If Google API is available, revoke the token
    if (window.google?.accounts.oauth2) {
      window.google.accounts.oauth2.revoke(accessToken, () => {
        console.log('Token revoked');
      });
    }
  }, [accessToken]);

  // Context value
  const value = {
    user,
    accessToken,
    loading,
    error,
    isAuthenticated: !!user,
    signIn,
    signOut
  };

  return (
    <NextAuthContext.Provider value={value}>
      {children}
    </NextAuthContext.Provider>
  );
}

export default NextAuthContext;