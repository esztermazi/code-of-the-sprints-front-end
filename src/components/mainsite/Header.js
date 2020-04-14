import React from 'react';

//Components
import Logo from '../mainsite/header/Logo';
import NavBar from '../mainsite/header/NavBar';

//Sytled components
import StyledColumnContainer from '../style/layout/StyledColumnContainer';

const Header = () => {
  return (
    <React.Fragment>
      <StyledColumnContainer>
        <Logo />
        <NavBar />
      </StyledColumnContainer>
    </React.Fragment>
  );
};

export default Header;
