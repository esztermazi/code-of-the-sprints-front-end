//Packages
import React, { useContext } from 'react';

//Contexts
import { ThemeContext, ThemeProvider } from '../../contexts/ThemeContext';

//Components
import AppTheme from '../../../static/util/AppTheme';

//Styled Components
import { LogoImage } from '../../style/Images';

const Logo = () => {
  const theme = useContext(ThemeContext)[0];
  const currentTheme = AppTheme[theme];
  const images = require.context('../../../static/img/', true);
  let logoImageUrl = images(`./${currentTheme.logoPic}.png`);

  return (
    <ThemeProvider value={currentTheme}>
      <LogoImage src={logoImageUrl} alt="logo" />
    </ThemeProvider>
  );
};

export default Logo;
