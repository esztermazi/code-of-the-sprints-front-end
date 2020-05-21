//Packages
import React, { useContext, useState } from 'react';

//Contexts
import { ThemeContext, ThemeProvider } from '../../contexts/ThemeContext';

//Components
import AppTheme from '../../../static/util/AppTheme';
import Footer from './Footer';
import Stage from './orderbuilder/Stage';
import Display from './orderbuilder/Display';
import StartButton from './orderbuilder/StartButton';

//Custom Hooks
import { usePlayer } from './orderbuilder/hooks/usePlayer';
import { useStage } from './orderbuilder/hooks/useStage';

//Functions
import { createStage, checkCollision } from './orderbuilder/GameHelper';

//Styled Components
import { BackgroundContainer } from '../../style/LayoutElements';
import {
  StyledWrapper,
  StyledOrderBuilder,
} from '../../style/OrderBuilderElements';

const OrderBuilder = () => {
  const theme = useContext(ThemeContext)[0];
  const currentTheme = AppTheme[theme];
  const [dropTime, setDropTime] = useState(null);
  const [gameOver, setGameOver] = useState(false);

  const [player, updatePlayerPos, resetPlayer] = usePlayer();
  const [stage, setStage] = useStage(player);

  const movePlayer = (dir) => {
    if (!checkCollision(player, stage, { x: dir, y: 0 })) {
      updatePlayerPos({ x: dir, y: 0 });
    }
  };

  const startGame = () => {
    setStage(createStage());
    resetPlayer();
  };

  const drop = () => {
    updatePlayerPos({ x: 0, y: 1, collided: false });
  };

  const dropPlayer = () => {
    drop();
  };

  const move = (e) => {
    if (!gameOver) {
      if (e.keyCode === 37) {
        movePlayer(-1);
      } else if (e.keyCode === 39) {
        movePlayer(1);
      } else if (e.keyCode === 40) {
        dropPlayer();
      }
    }
  };

  return (
    <ThemeProvider value={currentTheme}>
      <BackgroundContainer
        color={currentTheme.bodyBackground}
        role="button"
        tabIndex="0"
        onKeyDown={(e) => move(e)}
      >
        <StyledWrapper>
          <StyledOrderBuilder>
            <Stage stage={stage} />
            <aside>
              {gameOver ? (
                <Display gameOver={gameOver} text="Game Over" />
              ) : (
                <React.Fragment>
                  <Display text="Score" />
                  <Display text="Rows" />
                  <Display text="Level" />
                </React.Fragment>
              )}
              <StartButton callback={startGame} />
              <Footer currentTheme={currentTheme} />
            </aside>
          </StyledOrderBuilder>
        </StyledWrapper>
      </BackgroundContainer>
    </ThemeProvider>
  );
};

export default OrderBuilder;
