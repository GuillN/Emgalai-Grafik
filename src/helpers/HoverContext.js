/* eslint-disable */
import React, { createContext, useState, useContext } from 'react';

// Create the context
const HoverContext = createContext();

// Provider component
export const HoverProvider = ({ children }) => {
  // We only need one state for the background image
  const [backgroundImage, setBackgroundImage] = useState(null);

  // Value to be provided to consuming components
  const value = {
    backgroundImage,
    setHoveredImage: setBackgroundImage // Direct function to set the background
  };

  return (
    <HoverContext.Provider value={value}>
      {children}
    </HoverContext.Provider>
  );
};

// Custom hook for using the hover context
export const useHover = () => {
  const context = useContext(HoverContext);
  if (context === undefined) {
    throw new Error('useHover must be used within a HoverProvider');
  }
  return context;
}; 