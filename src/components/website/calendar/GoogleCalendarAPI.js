// Google Calendar API integration
import { authorize, loadGapiClient } from './CalendarUtils';

// Initialize Google API
let gapi = null;
let tokenClient = null;
let apiInitialized = false;

// Initialize the Google API client
export const initializeGoogleApi = async (clientId, apiKey) => {
  if (!apiInitialized) {
    try {
      // Load the Google API client
      await loadGapiClient();
      gapi = window.gapi;
      
      // Initialize the auth client
      await new Promise((resolve) => {
        gapi.load('client', resolve);
      });
      
      // Initialize the API with your credentials
      await gapi.client.init({
        apiKey: apiKey,
        discoveryDocs: ['https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest'],
      });
      
      // Load the Google Identity Services client
      await new Promise((resolve) => {
        const script = document.createElement('script');
        script.src = 'https://accounts.google.com/gsi/client';
        script.onload = resolve;
        document.head.appendChild(script);
      });
      
      // Create an identity token client
      tokenClient = window.google.accounts.oauth2.initTokenClient({
        client_id: clientId,
        scope: 'https://www.googleapis.com/auth/calendar',
        callback: '', // Will be set dynamically during authorization
      });
      
      apiInitialized = true;
      return true;
    } catch (error) {
      console.error('Error initializing Google API:', error);
      return false;
    }
  }
  
  return apiInitialized;
};

// Check if the user is authenticated
export const isAuthenticated = () => {
  if (!gapi) return false;
  
  const token = gapi.client.getToken();
  return !!token;
};

// Request authorization from the user
export const requestAuthorization = async () => {
  if (!tokenClient) {
    throw new Error('Google API not initialized');
  }
  
  return new Promise((resolve, reject) => {
    try {
      tokenClient.callback = (resp) => {
        if (resp.error) {
          reject(resp);
        }
        resolve(resp);
      };
      
      tokenClient.requestAccessToken({ prompt: 'consent' });
    } catch (error) {
      reject(error);
    }
  });
};

// Fetch events from Google Calendar
export const getEvents = async (calendarId = 'primary', timeMin = new Date(), timeMax = null) => {
  if (!gapi || !isAuthenticated()) {
    await authorize(tokenClient);
  }
  
  // If timeMax is not provided, default to 30 days from now
  if (!timeMax) {
    timeMax = new Date();
    timeMax.setDate(timeMax.getDate() + 30);
  }
  
  try {
    const response = await gapi.client.calendar.events.list({
      calendarId: calendarId,
      timeMin: timeMin.toISOString(),
      timeMax: timeMax.toISOString(),
      showDeleted: false,
      singleEvents: true,
      orderBy: 'startTime',
      maxResults: 100,
    });
    
    return response.result.items || [];
  } catch (error) {
    console.error('Error fetching events:', error);
    throw error;
  }
};

// Create a new event in Google Calendar
export const createEvent = async (eventData, calendarId = 'primary') => {
  if (!gapi || !isAuthenticated()) {
    await authorize(tokenClient);
  }
  
  // Format the event data for Google Calendar API
  const googleEvent = {
    summary: eventData.title,
    location: eventData.location,
    description: eventData.description,
    start: {
      dateTime: eventData.allDay ? null : eventData.start.toISOString(),
      date: eventData.allDay ? eventData.start.toISOString().split('T')[0] : null,
      timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    },
    end: {
      dateTime: eventData.allDay ? null : eventData.end.toISOString(),
      date: eventData.allDay ? eventData.end.toISOString().split('T')[0] : null,
      timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    },
    colorId: eventData.backgroundColor ? getColorIdFromHex(eventData.backgroundColor) : null,
    reminders: {
      useDefault: true,
    },
  };

  try {
    const response = await gapi.client.calendar.events.insert({
      calendarId: calendarId,
      resource: googleEvent,
    });
    
    return response.result;
  } catch (error) {
    console.error('Error creating event:', error);
    throw error;
  }
};

// Update an existing event in Google Calendar
export const updateEvent = async (eventData, calendarId = 'primary') => {
  if (!gapi || !isAuthenticated()) {
    await authorize(tokenClient);
  }
  
  if (!eventData.id) {
    throw new Error('Event ID is required for updates');
  }
  
  // Format the event data for Google Calendar API
  const googleEvent = {
    summary: eventData.title,
    location: eventData.location,
    description: eventData.description,
    start: {
      dateTime: eventData.allDay ? null : eventData.start.toISOString(),
      date: eventData.allDay ? eventData.start.toISOString().split('T')[0] : null,
      timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    },
    end: {
      dateTime: eventData.allDay ? null : eventData.end.toISOString(),
      date: eventData.allDay ? eventData.end.toISOString().split('T')[0] : null,
      timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    },
    colorId: eventData.backgroundColor ? getColorIdFromHex(eventData.backgroundColor) : null,
  };

  try {
    const response = await gapi.client.calendar.events.update({
      calendarId: calendarId,
      eventId: eventData.id,
      resource: googleEvent,
    });
    
    return response.result;
  } catch (error) {
    console.error('Error updating event:', error);
    throw error;
  }
};

// Delete an event from Google Calendar
export const deleteEvent = async (eventId, calendarId = 'primary') => {
  if (!gapi || !isAuthenticated()) {
    await authorize(tokenClient);
  }
  
  try {
    const response = await gapi.client.calendar.events.delete({
      calendarId: calendarId,
      eventId: eventId,
    });
    
    return response.result;
  } catch (error) {
    console.error('Error deleting event:', error);
    throw error;
  }
};

// Helper function to map hex color to Google Calendar color ID
const getColorIdFromHex = (hexColor) => {
  // Google Calendar has 11 predefined colors (1-11)
  // This is a simplified mapping - you could create a more accurate one
  const colorMap = {
    '#7986cb': '1', // Lavender
    '#33b679': '2', // Sage
    '#8e24aa': '3', // Grape
    '#e67c73': '4', // Flamingo
    '#f6c026': '5', // Banana
    '#f5511d': '6', // Tangerine
    '#039be5': '7', // Peacock
    '#616161': '8', // Graphite
    '#3f51b5': '9', // Blueberry
    '#0b8043': '10', // Basil
    '#d60000': '11', // Tomato
  };
  
  // Default to color 7 (Peacock blue)
  return '7';
};