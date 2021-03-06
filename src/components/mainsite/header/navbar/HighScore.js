//Packages
import React, { useContext } from 'react';

//Contexts
import { ThemeContext, ThemeProvider } from '../../../contexts/ThemeContext';

//Components
import AppTheme from '../../../../static/util/AppTheme';
import Footer from '../../mainmenu/Footer';

const HighScore = () => {
  const theme = useContext(ThemeContext)[0];
  const currentTheme = AppTheme[theme];

  return (
    <ThemeProvider value={currentTheme}>
      <Footer currentTheme={currentTheme} />
    </ThemeProvider>
  );
};

export default HighScore;
