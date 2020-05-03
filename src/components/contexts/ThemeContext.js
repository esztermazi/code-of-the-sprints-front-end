//Packages
import React, { useState, createContext } from 'react';

//Components
export const ThemeContext = createContext();

export const ThemeProvider = (props) => {
  const [theme, setTheme] = useState([]);

  return (
    <ThemeContext.Provider value={[theme, setTheme]}>
      {props.children}
    </ThemeContext.Provider>
  );
};
