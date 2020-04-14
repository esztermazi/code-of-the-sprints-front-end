import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

//Components
import Menu from './mainmenu/Menu';
import Header from './Header';

//Styled Components
import StyledColumnContainer from '../style/layout/StyledColumnContainer';

const MainMenu = () => {
  return (
    <StyledColumnContainer>
      <Header />
      <Menu />
      <div>
        <Link
          to={{
            pathname: `/scores-of-the-sprints`,
          }}
        >
          <Button variant="success">Back to Home</Button>
        </Link>
      </div>
    </StyledColumnContainer>
  );
};

export default MainMenu;
