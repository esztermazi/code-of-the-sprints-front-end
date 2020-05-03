//Packages
import React from 'react';

//Components
import Logo from '../mainsite/header/Logo';
import NavBar from '../mainsite/header/NavBar';

const Header = () => {
  return (
    <React.Fragment>
      <Logo />
      <NavBar />
    </React.Fragment>
  );
};

export default Header;
