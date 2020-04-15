import React from 'react';

//Components
import Logo from '../mainsite/header/Logo';
import NavBar from '../mainsite/header/NavBar';

//Sytled components
import StyledColumnContainer from '../style/layout/StyledColumnContainer';

const Header = (props) => {
  return (
    <React.Fragment>
      <StyledColumnContainer>
        <Logo currentTheme={props.currentTheme} />
        <NavBar currentTheme={props.currentTheme} />
      </StyledColumnContainer>
    </React.Fragment>
  );
};

export default Header;
