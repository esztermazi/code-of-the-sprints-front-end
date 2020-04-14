import React from 'react';
//Components
import Poem from './mainsite/Poem';

//Sytled components
import StyledColumnContainer from './style/layout/StyledColumnContainer';

//Images
import HomePic from '../static/img/Home.png';

//Packages
import { Link } from 'react-router-dom';

//Bootstrap components
import { Button } from 'react-bootstrap';

const MainSite = () => {
  return (
    <StyledColumnContainer>
      <Poem />
      <Link to="/main-menu">
        <img src={HomePic} alt="poster" />
      </Link>
      <Link to="/">
        <Button variant="success">￩I Want to speake Sindarin again!</Button>
      </Link>
    </StyledColumnContainer>
  );
};

export default MainSite;
