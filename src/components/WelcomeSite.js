import React, { useContext } from 'react';
import WelcomePic from '../static/img/Welcome.gif';
import { Link } from 'react-router-dom';

//Components
import AppTheme from '../static/util/AppTheme';

//Context
import { ThemeContext, ThemeProvider } from './contexts/ThemeContext';

//Sytled component
import StyledColumnContainer from './style/layout/StyledColumnContainer';
import BackgroundContainer from './style/layout/BackgroundContainer';

//Bootstrap component
import { Alert } from 'react-bootstrap';

const WelcomeSite = () => {
  const theme = useContext(ThemeContext)[0];
  const currentTheme = AppTheme[theme];

  return (
    <ThemeProvider value={currentTheme}>
      <BackgroundContainer style={{ backgroundColor: 'rgb(37, 39, 38)' }}>
        <StyledColumnContainer>
          <Link to="/home-of-the-sprints">
            <img src={WelcomePic} alt="welcomepic"></img>
          </Link>
          <Alert variant={currentTheme.variant}>
            <Alert.Heading className="text-center">
              "It's a riddle. Speak friend and enter. What's the Elvish word for
              friend?"
            </Alert.Heading>
          </Alert>
        </StyledColumnContainer>
      </BackgroundContainer>
    </ThemeProvider>
  );
};

export default WelcomeSite;
