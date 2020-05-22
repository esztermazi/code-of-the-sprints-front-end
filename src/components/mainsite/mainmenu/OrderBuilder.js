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
import { useInterval } from './orderbuilder/hooks/useInterval';
import { usePlayer } from './orderbuilder/hooks/usePlayer';
import { useStage } from './orderbuilder/hooks/useStage';
import { useGameStatus } from './orderbuilder/hooks/useGameStatus';

//Functions
import { createStage, checkCollision } from './orderbuilder/GameHelper';

//Styled Components
import { Background } from '../../style/LayoutElements';
import {
  StyledWrapper,
  StyledOrderBuilder,
} from '../../style/OrderBuilderElements';

const OrderBuilder = () => {
  const theme = useContext(ThemeContext)[0];
  const currentTheme = AppTheme[theme];
  const images = require.context('../../../static/img/', true);
  let imgUrl = images(`./${currentTheme.backgroundImage}.png`);

  const [dropTime, setDropTime] = useState(null);
  const [gameOver, setGameOver] = useState(false);

  const [player, updatePlayerPos, resetPlayer, playerRotate] = usePlayer();
  const [stage, setStage, rowsCleared] = useStage(player, resetPlayer);
  const [score, setScore, rows, setRows, level, setLevel] = useGameStatus(
    rowsCleared
  );

  const movePlayer = (dir) => {
    if (!checkCollision(player, stage, { x: dir, y: 0 })) {
      updatePlayerPos({ x: dir, y: 0 });
    }
  };

  const startGame = () => {
    setStage(createStage());
    setDropTime(1000);
    resetPlayer();
    setGameOver(false);
    setScore(0);
    setRows(0);
    setLevel(0);
  };

  const drop = () => {
    if (rows > (level + 1) * 10) {
      setLevel((prev) => prev + 1);
      setDropTime(1000 / (level + 1) + 200);
    }

    if (!checkCollision(player, stage, { x: 0, y: 1 })) {
      updatePlayerPos({ x: 0, y: 1, collided: false });
    } else {
      if (player.pos.y < 1) {
        setGameOver(true);
        setDropTime(null);
      }
      updatePlayerPos({ x: 0, y: 0, collided: true });
    }
  };

  const dropPlayer = () => {
    setDropTime(null);
    drop();
  };

  const keyUp = (e) => {
    if (!gameOver) {
      if (e.keyCode === 40) {
        setDropTime(1000 / (level + 1) + 200);
      }
    }
  };

  const move = (e) => {
    if (!gameOver) {
      if (e.keyCode === 37) {
        movePlayer(-1);
      } else if (e.keyCode === 39) {
        movePlayer(1);
      } else if (e.keyCode === 40) {
        dropPlayer();
      } else if (e.keyCode === 38) {
        playerRotate(stage, 1);
      }
    }
  };

  useInterval(() => {
    drop();
  }, dropTime);

  return (
    <ThemeProvider value={currentTheme}>
      <Background
        imgUrl={imgUrl}
        role="button"
        tabIndex="0"
        onKeyDown={(e) => move(e)}
        onKeyUp={(e) => keyUp(e)}
      >
        <StyledWrapper>
          <StyledOrderBuilder>
            <Stage stage={stage} />
            <aside>
              {gameOver ? (
                <Display
                  currentTheme={currentTheme}
                  gameOver={gameOver}
                  text="Game Over"
                />
              ) : (
                <React.Fragment>
                  <Display
                    currentTheme={currentTheme}
                    text={`Score: ${score}`}
                  />
                  <Display currentTheme={currentTheme} text={`Rows: ${rows}`} />
                  <Display
                    currentTheme={currentTheme}
                    text={`Level: ${level}`}
                  />
                </React.Fragment>
              )}
              <StartButton currentTheme={currentTheme} callback={startGame} />
              <Footer currentTheme={currentTheme} />
            </aside>
          </StyledOrderBuilder>
        </StyledWrapper>
      </Background>
    </ThemeProvider>
  );
};

export default OrderBuilder;
