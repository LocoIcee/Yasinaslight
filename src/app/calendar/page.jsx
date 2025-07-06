'use client';
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Shield } from 'lucide-react';
import Calendar from '@/components/calendar/Calendar';
import { 
  initializeGoogleApi, 
  isAuthenticated as checkIsAuthenticated, 
  requestAuthorization 
} from '@/components/calendar/GoogleCalendarAPI';

const CalendarPage = () => {
  const [isInitializing, setIsInitializing] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState(null);
  
  // Replace with your Google Calendar API credentials
  // For a real application, these should be stored in environment variables
  // Instructions to get these credentials:
  // 1. Go to https://console.cloud.google.com/
  // 2. Create a new project
  // 3. Enable the Google Calendar API
  // 4. Create OAuth 2.0 credentials and API key
  // 5. Add authorized JavaScript origins and redirect URIs
  const GOOGLE_API_KEY = import.meta.env.VITE_GOOGLE_API_KEY || 'YOUR_API_KEY';
  const GOOGLE_CLIENT_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID || 'YOUR_CLIENT_ID';
  
  // Initialize the Google API client
  useEffect(() => {
    const initApi = async () => {
      try {
        setIsInitializing(true);
        const initialized = await initializeGoogleApi(GOOGLE_CLIENT_ID, GOOGLE_API_KEY);
        
        if (initialized) {
          // Check if the user is already authenticated
          const authState = checkIsAuthenticated();
          setIsAuthenticated(authState);
        }
      } catch (error) {
        console.error('Failed to initialize Google API:', error);
        setError('Failed to initialize calendar. Please try refreshing the page.');
      } finally {
        setIsInitializing(false);
      }
    };
    
    initApi();
  }, []);
  
  // Handle login request
  const handleLoginRequest = async () => {
    try {
      await requestAuthorization();
      setIsAuthenticated(true);
    } catch (error) {
      console.error('Authorization failed:', error);
      setError('Authorization failed. Please try again.');
    }
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-10 text-center">
        <h1 className="text-4xl font-bold mb-4" style={{ color: '#563D7C' }}>
          Calendar
        </h1>
        <p className="text-lg mb-6">
          View upcoming events, schedule sessions, and manage your calendar.
        </p>
      </div>
      
      {error && (
        <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-6 rounded" role="alert">
          <p>{error}</p>
        </div>
      )}
      
      {isInitializing ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-600"></div>
          <span className="ml-3">Loading calendar...</span>
        </div>
      ) : (
        <div className="bg-white p-6 rounded-lg shadow-md">
          {!isAuthenticated && (
            <div className="text-center p-6 mb-6 bg-gray-50 rounded-md">
              <Shield className="mx-auto h-12 w-12 text-purple-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Connect Your Google Calendar</h3>
              <p className="mb-4 text-gray-600">
                Connect to your Google Calendar to view your events, create new events, and sync everything with your Google account.
              </p>
              <Button 
                onClick={handleLoginRequest}
                className="bg-purple-600 hover:bg-purple-700"
              >
                Connect Google Calendar
              </Button>
            </div>
          )}
          
          <Calendar 
            isAuthenticated={isAuthenticated} 
            onLoginRequest={handleLoginRequest} 
          />
        </div>
      )}
      
      <div className="mt-10 bg-gray-50 p-6 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4" style={{ color: '#563D7C' }}>
          Calendar Features
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-2">Sync with Google</h3>
            <p>Keep your events synchronized with your Google Calendar for seamless scheduling.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Custom Events</h3>
            <p>Create events with custom details, locations, and reminders to stay organized.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Multiple Views</h3>
            <p>Switch between month, week, and day views to manage your schedule efficiently.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalendarPage;