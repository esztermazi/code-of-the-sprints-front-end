import React, { useContext } from 'react';

//Component
import MainMenu from './mainsite/MainMenu';
import Header from './mainsite/Header';
import Footer from './mainsite/Footer';
import AppTheme from '../static/util/AppTheme';

//Context
import { ThemeContext } from './contexts/ThemeContext';

//Styled Component
import StyledColumnContainer from './style/layout/StyledColumnContainer';
import BackgroundContainer from './style/layout/BackgroundContainer';

const MainSite = () => {
  const theme = useContext(ThemeContext)[0];
  const currentTheme = AppTheme[theme];
  return (
    <BackgroundContainer
      style={{
        backgroundColor: currentTheme.bodyBackground,
      }}
    >
      <StyledColumnContainer>
        <Header />
        <MainMenu />
        <Footer />
      </StyledColumnContainer>
    </BackgroundContainer>
  );
};

export default MainSite;
