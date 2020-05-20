//Packages
import React from 'react';

//Styled Components
import { StyledDisplay } from '../../../style/OrderBuilderElements';

const Display = ({ gameOver, text }) => (
  <StyledDisplay gameOver={gameOver}>{text}</StyledDisplay>
);

export default Display;
