import React, { useContext } from 'react';

//Context
import { ThemeContext, ThemeProvider } from '../../contexts/ThemeContext';

//Component
import AppTheme from '../../../static/util/AppTheme';

const Logo = () => {
  const theme = useContext(ThemeContext)[0];
  const currentTheme = AppTheme[theme];
  const images = require.context('../../../static/img/', true);
  let logoImageUrl = images(`./${currentTheme.logoPic}.png`);

  return (
    <ThemeProvider value={currentTheme}>
      <img src={logoImageUrl} alt="logo" width="280" height="250" />
    </ThemeProvider>
  );
};

export default Logo;
