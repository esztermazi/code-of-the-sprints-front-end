import React, { useContext } from 'react';

//Components
import Poem from './mainsite/Poem';
import AppTheme from '../static/util/AppTheme';

//Context
import { ThemeContext, ThemeProvider } from './contexts/ThemeContext';

//Sytled components
import StyledColumnContainer from './style/layout/StyledColumnContainer';

//Images
import HomePic from '../static/img/Home.png';

//Packages
import { Link } from 'react-router-dom';

//Bootstrap components
import { Button } from 'react-bootstrap';

const Index = () => {
  const theme = useContext(ThemeContext)[0];
  const currentTheme = AppTheme[theme];

  return (
    <ThemeProvider value={currentTheme}>
      <StyledColumnContainer cardBackGround>
        <Poem currentTheme={currentTheme} />
        <Link to="/scores-of-the-sprints">
          <img src={HomePic} alt="poster" />
        </Link>
        <Link to="/">
          <Button variant={currentTheme.variant}>
            ￩I Want to speake Sindarin again!
          </Button>
        </Link>
      </StyledColumnContainer>
    </ThemeProvider>
  );
};

export default Index;
