import React from 'react';
import { createRoot } from 'react-dom/client';
import '../src/index.css';
import MockupsApp from './components/mockups/MockupsApp';

// Create placeholder images for mockups
const createPlaceholders = () => {
  // This would typically be where we'd generate images programmatically
  // For this mockup, we're just creating references to images that would be added
  console.log("Mockup assets would be loaded here");
};

// Initialize the application
const initMockupApp = () => {
  createPlaceholders();
  
  const container = document.getElementById('root');
  const root = createRoot(container);
  
  root.render(
    <React.StrictMode>
      <MockupsApp />
    </React.StrictMode>
  );
};

// Start the application
initMockupApp();