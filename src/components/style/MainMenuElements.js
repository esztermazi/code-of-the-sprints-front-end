//Packages
import styled from 'styled-components';

export const StyledCardText = styled.p`
  color: ${(props) => props.textHoverColor};
`;

export const StyledCardTitle = styled.p`
  color: ${(props) => props.color};
  font-size: 20px;
`;

export const StyledCardBody = styled.div`
  display: block;
  padding: 10px;
`;
