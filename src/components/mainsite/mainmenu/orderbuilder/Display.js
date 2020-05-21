//Packages
import React from 'react';

//Styled Components
import { StyledDisplay } from '../../../style/OrderBuilderElements';

const Display = ({ currentTheme, gameOver, text }) => (
  <StyledDisplay
    itemBackGround={currentTheme.itemBackGround}
    borderColor={currentTheme.borderColor}
    gameOver={gameOver}
  >
    {text}
  </StyledDisplay>
);

export default Display;
