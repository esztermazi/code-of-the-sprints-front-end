import React, { useContext } from 'react';

//Component
import Poem from './mainsite/Poem';
import AppTheme from '../static/util/AppTheme';

//Context
import { ThemeContext, ThemeProvider } from './contexts/ThemeContext';

//Sytled component
import {
  BackgroundContainer,
  StyledColumnContainer,
} from './style/LayoutElements';

//Image
import HomePic from '../static/img/Home.png';

//Package
import { Link } from 'react-router-dom';

//Bootstrap component
import { Button } from 'react-bootstrap';

const Index = () => {
  const theme = useContext(ThemeContext)[0];
  const currentTheme = AppTheme[theme];

  return (
    <ThemeProvider value={currentTheme}>
      <BackgroundContainer
        style={{
          backgroundColor: currentTheme.bodyBackground,
        }}
      >
        <StyledColumnContainer>
          <Poem currentTheme={currentTheme} />
          <Link to="/code-of-the-sprints">
            <img src={HomePic} alt="poster" />
          </Link>
          <Link to="/">
            <Button variant={currentTheme.variant}>
              ￩I Want to speake Elvish again!
            </Button>
          </Link>
        </StyledColumnContainer>
      </BackgroundContainer>
    </ThemeProvider>
  );
};

export default Index;
