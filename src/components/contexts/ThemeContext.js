import React, { useState, createContext } from 'react';

export const ThemeContext = createContext(['colorful', () => {}]);

export const ThemeProvider = props => {
  const [theme, setTheme] = useState([]);

  return (
    <ThemeContext.Provider value={[theme, setTheme]}>
      {props.children}
    </ThemeContext.Provider>
  );
};