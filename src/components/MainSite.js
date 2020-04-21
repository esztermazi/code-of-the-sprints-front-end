import React, { useContext } from 'react';

//Components
import MainMenu from './mainsite/MainMenu';
import Header from './mainsite/Header';
import Footer from './mainsite/Footer';
import AppTheme from '../static/util/AppTheme';

//Context
import { ThemeContext } from './contexts/ThemeContext';

//Styled Components
import StyledColumnContainer from './style/layout/StyledColumnContainer';
import BackGroundContainer from './style/layout/BackgroundContainer';

const MainSite = () => {
  const theme = useContext(ThemeContext)[0];
  const currentTheme = AppTheme[theme];
  return (
    <BackGroundContainer
      style={{
        backgroundColor: currentTheme.bodyBackground,
      }}
    >
      <StyledColumnContainer>
        <Header />
        <MainMenu />
        <Footer />
      </StyledColumnContainer>
    </BackGroundContainer>
  );
};

export default MainSite;
