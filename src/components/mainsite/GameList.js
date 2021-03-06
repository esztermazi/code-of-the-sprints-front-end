//Packages
import React, { useContext } from 'react';

//Contexts
import { ThemeContext, ThemeProvider } from '../contexts/ThemeContext';

//Components
import { Games as games } from '../../static/util/Games';
import AppTheme from '../../static/util/AppTheme';

//Styled Components
import { StyledInLineContainer } from '../style/LayoutElements';
import {
  StyledCard,
  StyledCardInner,
  StyledCardFront,
  StyledCardBack,
  StyledCardImg,
  StyledCardText,
  StyledCardTitle,
  StyledCardLink,
} from '../style/GameListElements';

const GameList = () => {
  const theme = useContext(ThemeContext)[0];
  const currentTheme = AppTheme[theme];
  const images = require.context('../../static/img/', true);

  return (
    <ThemeProvider value={currentTheme}>
      <StyledInLineContainer>
        {games.map((game) => (
          <StyledCard key={game.id}>
            <StyledCardInner>
              <StyledCardFront
                style={{
                  width: '15rem',
                  backgroundColor: currentTheme.itemBackGround,
                }}
                className={currentTheme.textColor}
              >
                <StyledCardImg
                  variant="top"
                  src={images(`./${game.img}.png`)}
                  alt={game.link}
                />
                <StyledCardTitle color={currentTheme.textColor}>
                  {game.title}
                </StyledCardTitle>
              </StyledCardFront>
              <StyledCardBack
                style={{
                  width: '15rem',
                  backgroundColor: currentTheme.itemBackGround,
                }}
              >
                <StyledCardText textHoverColor={currentTheme.textHoverColor}>
                  {game.description}
                </StyledCardText>
                <StyledCardLink
                  color={currentTheme.textColor}
                  hoverColor={currentTheme.textHoverColor}
                  to={`/${game.link}`}
                >
                  <i className={`fa fa-${game.icon}`} id="icon" />
                </StyledCardLink>
              </StyledCardBack>
            </StyledCardInner>
          </StyledCard>
        ))}
      </StyledInLineContainer>
    </ThemeProvider>
  );
};

export default GameList;
