//Packages
import styled from 'styled-components';

export const StyledNavigationButton = styled.button`
  color: ${(props) => props.color};
  background-color: transparent;
  border: none;
  margin: 5px;
  &:hover {
    color: ${(props) => props.textHoverColor};
  }
`;
