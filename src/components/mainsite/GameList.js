//Packages
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';

//Contexts
import { ThemeContext, ThemeProvider } from '../contexts/ThemeContext';

//Components
import { Games as games } from '../../static/util/Games';
import AppTheme from '../../static/util/AppTheme';

//Styled Components
import { StyledInLineContainer } from '../style/LayoutElements';
import {
  StyledCardText,
  StyledCardTitle,
  StyledCardBody,
} from '../style/MainMenuElements';

const GameList = () => {
  const theme = useContext(ThemeContext)[0];
  const currentTheme = AppTheme[theme];
  const images = require.context('../../static/img/', true);

  return (
    <ThemeProvider value={currentTheme}>
      <StyledInLineContainer>
        {games.map((game) => (
          <Card
            style={{
              width: '18rem',
              backgroundColor: currentTheme.itemBackGround,
            }}
            className={currentTheme.textColor}
          >
            <Link to={`/${game.link}`}>
              <Card.Img
                variant="top"
                src={images(`./${game.img}.png`)}
                alt={game.link}
              />
            </Link>
            <StyledCardBody>
              <StyledCardTitle color={currentTheme.textColor}>
                {game.title}
              </StyledCardTitle>
              <StyledCardText textHoverColor={currentTheme.textHoverColor}>
                {game.description}
              </StyledCardText>
            </StyledCardBody>
          </Card>
        ))}
      </StyledInLineContainer>
    </ThemeProvider>
  );
};

export default GameList;
