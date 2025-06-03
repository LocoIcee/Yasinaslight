// src/auth/next-auth.js
import axios from 'axios';

// Constants for authentication
const NEXTAUTH_URL = import.meta.env.VITE_NEXTAUTH_URL || 'http://localhost:3000';
const GOOGLE_CLIENT_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID || '';
const GOOGLE_CLIENT_SECRET = import.meta.env.VITE_GOOGLE_CLIENT_SECRET || '';

// Google Calendar API endpoints and scopes
const CALENDAR_API_URL = 'https://www.googleapis.com/calendar/v3';
const SCOPES = [
  'https://www.googleapis.com/auth/calendar',
  'https://www.googleapis.com/auth/calendar.events',
  'profile',
  'email'
];

/**
 * Creates an authenticated axios instance with the user's access token
 * @param {string} accessToken - OAuth access token
 * @returns {import('axios').AxiosInstance} Axios instance with auth headers
 */
export const createAuthenticatedClient = (accessToken) => {
  return axios.create({
    baseURL: CALENDAR_API_URL,
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json'
    }
  });
};

/**
 * Fetch events from Google Calendar
 * @param {string} accessToken - OAuth access token
 * @param {Date} startDate - Start date for events range
 * @param {Date} endDate - End date for events range
 * @returns {Promise<Array>} Calendar events
 */
export const fetchCalendarEvents = async (accessToken, startDate, endDate) => {
  try {
    const client = createAuthenticatedClient(accessToken);
    const response = await client.get('/events', {
      params: {
        calendarId: 'primary',
        timeMin: startDate.toISOString(),
        timeMax: endDate.toISOString(),
        singleEvents: true,
        orderBy: 'startTime'
      }
    });
    return response.data.items || [];
  } catch (error) {
    console.error('Error fetching calendar events:', error);
    throw new Error('Failed to fetch calendar events');
  }
};

/**
 * Create a new event in Google Calendar
 * @param {string} accessToken - OAuth access token
 * @param {Object} eventData - Event details
 * @returns {Promise<Object>} Created event
 */
export const createCalendarEvent = async (accessToken, eventData) => {
  try {
    const client = createAuthenticatedClient(accessToken);
    const response = await client.post('/events', eventData, {
      params: { calendarId: 'primary' }
    });
    return response.data;
  } catch (error) {
    console.error('Error creating calendar event:', error);
    throw new Error('Failed to create calendar event');
  }
};

/**
 * Update an existing event in Google Calendar
 * @param {string} accessToken - OAuth access token
 * @param {string} eventId - ID of the event to update
 * @param {Object} eventData - Updated event details
 * @returns {Promise<Object>} Updated event
 */
export const updateCalendarEvent = async (accessToken, eventId, eventData) => {
  try {
    const client = createAuthenticatedClient(accessToken);
    const response = await client.patch(`/events/${eventId}`, eventData, {
      params: { calendarId: 'primary' }
    });
    return response.data;
  } catch (error) {
    console.error('Error updating calendar event:', error);
    throw new Error('Failed to update calendar event');
  }
};

/**
 * Delete an event from Google Calendar
 * @param {string} accessToken - OAuth access token
 * @param {string} eventId - ID of the event to delete
 * @returns {Promise<void>}
 */
export const deleteCalendarEvent = async (accessToken, eventId) => {
  try {
    const client = createAuthenticatedClient(accessToken);
    await client.delete(`/events/${eventId}`, {
      params: { calendarId: 'primary' }
    });
  } catch (error) {
    console.error('Error deleting calendar event:', error);
    throw new Error('Failed to delete calendar event');
  }
};

// Export configuration and constants
export const nextAuthConfig = {
  NEXTAUTH_URL,
  GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET,
  SCOPES
};

export default {
  nextAuthConfig,
  fetchCalendarEvents,
  createCalendarEvent,
  updateCalendarEvent,
  deleteCalendarEvent
};