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

const MainSite = () => {
  const theme = useContext(ThemeContext)[0];
  const currentTheme = AppTheme[theme];
  return (
    <div
      style={{
        backgroundColor: currentTheme.bodyBackground,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
      }}
    >
      <StyledColumnContainer>
        <Header />
        <MainMenu />
        <Footer />
      </StyledColumnContainer>
    </div>
  );
};

export default MainSite;
