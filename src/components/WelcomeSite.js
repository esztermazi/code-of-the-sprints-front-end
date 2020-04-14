import React from 'react';
import WelcomePic from '../static/img/Welcome.gif';
import { Link } from 'react-router-dom';

//Sytled component
import StyledColumnContainer from './style/layout/StyledColumnContainer';

const WelcomeSite = () => {
  return (
    <StyledColumnContainer>
      <Link
        to={{
          pathname: `/scores-of-the-sprints`,
        }}
      >
        <img src={WelcomePic} alt="welcomepic"></img>
      </Link>
      <p>Say friend and enter !</p>
    </StyledColumnContainer>
  );
};

export default WelcomeSite;
