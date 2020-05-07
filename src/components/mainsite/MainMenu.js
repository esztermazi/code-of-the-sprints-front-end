//Packages
import React, { useContext, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';

//Contexts
import { ThemeContext, ThemeProvider } from '../contexts/ThemeContext';
import { CharacterContext } from '../contexts/CharacterContext';

//Components
import AppTheme from '../../static/util/AppTheme';

//Styled Components
import { StyledInLineContainer } from '../style/LayoutElements';
import {
  StyledCardText,
  StyledCardTitle,
  StyledCardBody,
} from '../style/MainMenuElements';

//Images
import GateInvadersPic from '../../static/img/GateInvaders.png';
import OrderBuilderPic from '../../static/img/OrderBuilder.png';
import TheBlackGatePic from '../../static/img/TheBlackGate.png';

const MainMenu = () => {
  const theme = useContext(ThemeContext)[0];
  const currentTheme = AppTheme[theme];
  const { character, setCharacterQuotes, quotes } = useContext(
    CharacterContext
  );

  const getQuotes = useCallback(() => {
    let quoteList = [];
    quotes.forEach((element) => {
      if (element.character === character._id) {
        quoteList.push(element);
      }
    });
    setCharacterQuotes(quoteList);
  }, [character._id, quotes, setCharacterQuotes]);

  useEffect(() => {
    getQuotes();
  }, [getQuotes]);

  return (
    <ThemeProvider value={currentTheme}>
      <StyledInLineContainer>
        <Card
          style={{
            width: '18rem',
            backgroundColor: currentTheme.itemBackGround,
          }}
          className={currentTheme.textColor}
        >
          <Link to="/gate-invaders">
            <Card.Img variant="top" src={GateInvadersPic} alt="gate-invaders" />
          </Link>
          <StyledCardBody>
            <StyledCardTitle color={currentTheme.textColor}>
              Gate Invaders
            </StyledCardTitle>
            <StyledCardText textHoverColor={currentTheme.textHoverColor}>
              "This is no rabble of mindless docs. These are the Uruk-hai, their
              armor thick and their shields broad..."
            </StyledCardText>
          </StyledCardBody>
        </Card>
        <Card
          style={{
            width: '18rem',
            backgroundColor: currentTheme.itemBackGround,
          }}
          className={currentTheme.textColor}
        >
          <Link to="/order-builder">
            <Card.Img variant="top" src={OrderBuilderPic} alt="order-builder" />
          </Link>
          <StyledCardBody>
            <StyledCardTitle color={currentTheme.textColor}>
              Order Builder
            </StyledCardTitle>
            <StyledCardText textHoverColor={currentTheme.textHoverColor}>
              "A new order will rise. We will drive the machine of war with the
              sword and the spear and the iron fist of the orc."
            </StyledCardText>
          </StyledCardBody>
        </Card>
        <Card
          style={{
            width: '18rem',
            backgroundColor: currentTheme.itemBackGround,
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
          <StyledCardBody>
            <StyledCardTitle color={currentTheme.textColor}>
              The Black Gate
            </StyledCardTitle>
            <StyledCardText textHoverColor={currentTheme.textHoverColor}>
              "I don't think Gandalf meant for us to come this way. Frodo: He
              didn't mean for a lot of things to happen, Sam... but they did."
            </StyledCardText>
          </StyledCardBody>
        </Card>
      </StyledInLineContainer>
    </ThemeProvider>
  );
};

export default MainMenu;
