//Packages
import React, { useContext } from 'react';

//Contexts
import { ThemeContext, ThemeProvider } from '../../contexts/ThemeContext';

//Components
import AppTheme from '../../../static/util/AppTheme';
import Footer from './Footer';

//Styled Components
import { Background } from '../../style/LayoutElements';

const TheBlackGate = () => {
  const theme = useContext(ThemeContext)[0];
  const currentTheme = AppTheme[theme];
  const images = require.context('../../../static/img/', true);
  let imgUrl = images(`./${currentTheme.backgroundImage}.png`);

  return (
    <ThemeProvider value={currentTheme}>
      <Background imgUrl={imgUrl}>
        <Footer currentTheme={currentTheme} />
      </Background>
    </ThemeProvider>
  );
};

export default TheBlackGate;
