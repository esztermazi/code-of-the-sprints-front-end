//Packages
import styled from 'styled-components';

export const StyledPoem = styled.div`
  color: ${(props) => props.color};
  position: absolute;
  top: 65%;
  left: 45%;
  transform: translate(-50%, -80%);
  font-size: 110%;
  text-shadow: 1px 1px 2px rgba(150, 150, 150, 1);
`;

export const StyledPoemContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
