//Packages
import React from 'react';

//Components
import { DocTypes } from '../../../../static/util/OrderBuilderDocTypes';

//Styled Components
import { StyledCell } from '../../../style/OrderBuilderElements';

const Cell = ({ type }) => (
  <StyledCell type={type} color={DocTypes[type].color}>
    cell
  </StyledCell>
);

export default Cell;
