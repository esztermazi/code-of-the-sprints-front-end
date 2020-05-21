//Packages
import React from 'react';

//Styled Components
import { StyledStartButton } from '../../../style/OrderBuilderElements';

const StartButton = ({ callback }) => (
  <StyledStartButton onClick={callback}>Start Game</StyledStartButton>
);

export default StartButton;
