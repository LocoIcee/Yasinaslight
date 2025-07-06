// Helper functions for calendar functionality

// Function to load the Google API client
export const loadGapiClient = () => {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = 'https://apis.google.com/js/api.js';
    script.onload = resolve;
    script.onerror = reject;
    document.head.appendChild(script);
  });
};

// Function to authorize with Google
export const authorize = async (tokenClient) => {
  if (!tokenClient) {
    throw new Error('Token client not initialized');
  }

  return new Promise((resolve, reject) => {
    try {
      tokenClient.callback = (resp) => {
        if (resp.error) {
          reject(resp);
        }
        resolve(resp);
      };
      
      tokenClient.requestAccessToken({ prompt: '' });
    } catch (error) {
      console.error('Authorization error:', error);
      reject(error);
    }
  });
};

// Format events from Google Calendar API for use with FullCalendar
export const formatEventsForCalendar = (events) => {
  if (!events || !Array.isArray(events)) {
    return [];
  }

  return events.map(event => {
    const colorId = event.colorId || '7'; // Default to blue if no color specified
    const color = getHexFromColorId(colorId);
    
    // Handle all-day events vs timed events
    const start = event.start.dateTime ? new Date(event.start.dateTime) : new Date(event.start.date);
    const end = event.end.dateTime ? new Date(event.end.dateTime) : new Date(event.end.date);
    const allDay = !event.start.dateTime;
    
    return {
      id: event.id,
      title: event.summary,
      start: start,
      end: end,
      description: event.description || '',
      location: event.location || '',
      backgroundColor: color,
      borderColor: color,
      allDay: allDay,
      extendedProps: {
        description: event.description || '',
        location: event.location || '',
        googleCalendarEventId: event.id,
      }
    };
  });
};

// Generate a random color for new events
export const getRandomColor = () => {
  // Pastel colors that match the website's aesthetic
  const colors = [
    '#4ECDC4', // Teal
    '#563D7C', // Deep Purple
    '#F8F5F2', // Off-White
    '#FF6B6B', // Coral
    '#F8CB57', // Yellow
    '#A3C1AD', // Sage
    '#7E8D85', // Olive
    '#B2967D', // Tan
  ];
  
  return colors[Math.floor(Math.random() * colors.length)];
};

// Map Google Calendar color IDs to hex colors
export const getHexFromColorId = (colorId) => {
  const colorMap = {
    '1': '#7986cb', // Lavender
    '2': '#33b679', // Sage
    '3': '#8e24aa', // Grape
    '4': '#e67c73', // Flamingo 
    '5': '#f6c026', // Banana
    '6': '#f5511d', // Tangerine
    '7': '#039be5', // Peacock
    '8': '#616161', // Graphite
    '9': '#3f51b5', // Blueberry
    '10': '#0b8043', // Basil
    '11': '#d60000', // Tomato
  };
  
  return colorMap[colorId] || '#4ECDC4'; // Default to the website's teal color
};