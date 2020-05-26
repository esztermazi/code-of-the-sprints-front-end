//Packages
import styled from 'styled-components';
import Tree from 'react-tree-graph';

export const StyledTree = styled(Tree)`
  .elements {
    @media screen and (max-width: 600px) {
      transform: rotate(90);
    }
  }
`;

export const StyledTitle = styled.text`
  stroke: #000000;
  fill: #000000;
`;
