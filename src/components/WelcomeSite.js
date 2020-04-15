import React, { useContext } from 'react';
import WelcomePic from '../static/img/Welcome.gif';
import { Link } from 'react-router-dom';

//Components
import AppTheme from '../static/util/AppTheme';

//Context
import { ThemeContext, ThemeProvider } from './contexts/ThemeContext';

//Sytled component
import StyledColumnContainer from './style/layout/StyledColumnContainer';

//Bootstrap components
import { Button } from 'react-bootstrap';

const WelcomeSite = () => {
  const theme = useContext(ThemeContext)[0];
  const currentTheme = AppTheme[theme];

  return (
    <ThemeProvider value={currentTheme}>
      <StyledColumnContainer>
        <Link
          to={{
            pathname: `/scores-of-the-sprints`,
          }}
        >
          <img src={WelcomePic} alt="welcomepic"></img>
        </Link>
        <Button variant={currentTheme.variant}>Say friend and enter !</Button>
      </StyledColumnContainer>
    </ThemeProvider>
  );
};

export default WelcomeSite;
