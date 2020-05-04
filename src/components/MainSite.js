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
import {
  BackgroundContainer,
  StyledColumnContainer,
} from './style/LayoutElements';

const MainSite = () => {
  const theme = useContext(ThemeContext)[0];
  const currentTheme = AppTheme[theme];
  return (
    <BackgroundContainer color={currentTheme.bodyBackground}>
      <StyledColumnContainer>
        <Header />
        <MainMenu />
        <Footer />
      </StyledColumnContainer>
    </BackgroundContainer>
  );
};

export default MainSite;
