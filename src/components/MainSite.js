//Packages
import React, { useContext } from 'react';

//Contexts
import { ThemeContext } from './contexts/ThemeContext';

//Components
import MainMenu from './mainsite/MainMenu';
import Header from './mainsite/Header';
import Footer from './mainsite/Footer';
import AppTheme from '../static/util/AppTheme';

//Stzled Components
import { Background, StyledColumnContainer } from './style/LayoutElements';

const MainSite = () => {
  const theme = useContext(ThemeContext)[0];
  const currentTheme = AppTheme[theme];
  const images = require.context('../static/img/', true);
  let imgUrl = images(`./${currentTheme.backgroundImage}.png`);

  return (
    <Background imgUrl={imgUrl}>
      <StyledColumnContainer>
        <Header />
        <MainMenu />
        <Footer />
      </StyledColumnContainer>
    </Background>
  );
};

export default MainSite;
