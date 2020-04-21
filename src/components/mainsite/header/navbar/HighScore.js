import React, { useContext } from 'react';
import Footer from '../../mainmenu/Footer';

//Context
import { ThemeContext, ThemeProvider } from '../../../contexts/ThemeContext';

//Component
import AppTheme from '../../../../static/util/AppTheme';

const HighScore = () => {
  const theme = useContext(ThemeContext)[0];
  const currentTheme = AppTheme[theme];

  return (
    <ThemeProvider value={currentTheme}>
      <div className={currentTheme.textColor}>High Score page</div>
      <Footer currentTheme={currentTheme} />
    </ThemeProvider>
  );
};

export default HighScore;
