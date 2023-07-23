// ThemeContext.js
// 'use client';

import React, { createContext, useState, useContext } from "react";

const ThemeContext = createContext('light');

export const lightTheme = {
  backgroundColor: "#fff",
  textColor: "#333",
  linkHoverColor: "#555",
};

export const darkTheme = {
  backgroundColor: "#222",
  textColor: "#fff",
  linkHoverColor: "#ddd",
};

const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };
  console.log(1)
  const theme = isDarkMode ? darkTheme : lightTheme;

  return (
    <ThemeContext.Provider value={{ theme, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

export { ThemeProvider, useTheme };
