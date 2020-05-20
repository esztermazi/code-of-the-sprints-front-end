//Packages
import React from 'react';

//Components
import { DocTypes } from '../../../../static/util/OrderBuilderDocTypes';

//Styled Components
import { StyledCell } from '../../../style/OrderBuilderElements';

const Cell = ({ type }) => (
  <StyledCell type={'L'} color={DocTypes['L'].color} />
);

export default Cell;
