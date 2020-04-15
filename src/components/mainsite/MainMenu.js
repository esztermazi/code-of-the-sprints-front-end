import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

//Components
import Menu from './mainmenu/Menu';
import Header from './Header';
import AppTheme from '../../static/util/AppTheme';

//Context
import { ThemeContext, ThemeProvider } from '../contexts/ThemeContext';

//Styled Components
import StyledColumnContainer from '../style/layout/StyledColumnContainer';

const MainMenu = () => {
  const theme = useContext(ThemeContext)[0];
  const currentTheme = AppTheme[theme];
  return (
    <ThemeProvider value={currentTheme}>
      <StyledColumnContainer>
        <Header currentTheme={currentTheme} />
        <Menu currentTheme={currentTheme} />
        <div>
          <Link
            to={{
              pathname: `/scores-of-the-sprints`,
            }}
          >
            <Button variant={currentTheme.variant}>Back to Home</Button>
          </Link>
        </div>
      </StyledColumnContainer>
    </ThemeProvider>
  );
};

export default MainMenu;
