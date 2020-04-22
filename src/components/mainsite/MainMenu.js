import React, { useContext } from 'react';

//Package
import { Link } from 'react-router-dom';

//Component
import AppTheme from '../../static/util/AppTheme';

//Picture
import GateInvadersPic from '../../static/img/GateInvaders.png';
import OrderBuilderPic from '../../static/img/OrderBuilder.png';
import TheBlackGatePic from '../../static/img/TheBlackGate.png';

//Context
import { ThemeContext, ThemeProvider } from '../contexts/ThemeContext';

//Styled Component
import { StyledInLineContainer } from '../style/LayoutElements';

//Bootstrap component
import { Card } from 'react-bootstrap';

const MainMenu = () => {
  const theme = useContext(ThemeContext)[0];
  const currentTheme = AppTheme[theme];

  return (
    <ThemeProvider value={currentTheme}>
      <StyledInLineContainer>
        <Card
          style={{
            width: '18rem',
            backgroundColor: currentTheme.cardBackGround,
          }}
          className={currentTheme.textColor}
        >
          <Link to="/gate-invaders">
            <Card.Img variant="top" src={GateInvadersPic} alt="gate-invaders" />
          </Link>
          <Card.Body>
            <Card.Title>Gate Invaders</Card.Title>
            <Card.Text color={currentTheme.textColor}>
              "This is no rabble of mindless docs. These are the Uruk-hai, their
              armor thick and their shields broad..."
            </Card.Text>
          </Card.Body>
        </Card>
        <Card
          style={{
            width: '18rem',
            backgroundColor: currentTheme.cardBackGround,
          }}
          className={currentTheme.textColor}
        >
          <Link to="/order-builder">
            <Card.Img variant="top" src={OrderBuilderPic} alt="order-builder" />
          </Link>
          <Card.Body>
            <Card.Title>Order Builder</Card.Title>
            <Card.Text>
              "A new order will rise. We will drive the machine of war with the
              sword and the spear and the iron fist of the orc."
            </Card.Text>
          </Card.Body>
        </Card>
        <Card
          style={{
            width: '18rem',
            backgroundColor: currentTheme.cardBackGround,
          }}
          className={currentTheme.textColor}
        >
          <Link to="/the-black-gate">
            <Card.Img
              variant="top"
              src={TheBlackGatePic}
              alt="the-black-gate"
            />
          </Link>
          <Card.Body>
            <Card.Title>The Black Gate</Card.Title>
            <Card.Text>
              "I don't think Gandalf meant for us to come this way. Frodo: He
              didn't mean for a lot of things to happen, Sam... but they did.""
            </Card.Text>
          </Card.Body>
        </Card>
      </StyledInLineContainer>
    </ThemeProvider>
  );
};

export default MainMenu;
