import React from 'react';

//Components
import MainMenu from './mainsite/MainMenu';
import Header from './mainsite/Header';
import Footer from './mainsite/Footer';

//Styled Components
import StyledColumnContainer from './style/layout/StyledColumnContainer';

const MainSite = () => {

  return (
      <StyledColumnContainer>
        <Header />
        <MainMenu />
        <div>
          <Footer />
        </div>
      </StyledColumnContainer>
  );
};

export default MainSite;
