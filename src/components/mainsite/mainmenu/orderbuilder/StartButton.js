//Packages
import React from 'react';

//Styled Components
import { StyledStartButton } from '../../../style/OrderBuilderElements';

const StartButton = ({ currentTheme, callback }) => (
  <StyledStartButton
    color={currentTheme.textColor}
    itemBackGround={currentTheme.itemBackGround}
    itemHoverBackGround={currentTheme.itemHoverBackGround}
    onClick={callback}
  >
    Start Game
  </StyledStartButton>
);

export default StartButton;
