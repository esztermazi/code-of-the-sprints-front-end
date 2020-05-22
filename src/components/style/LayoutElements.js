//Packages
import styled from 'styled-components';

export const BackgroundContainer = styled.div`
  background-color: ${(props) => props.color};
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const StyledColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const StyledInLineContainer = styled.div`
  display: flex;
  aligh-items: center;
  justify-content: center;
`;

export const Background = styled.div`
  height: 100%;
  width: 100%;
  object-fit: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  &::after {
    content: '';
    background-image: url(${(props) => props.imgUrl});
    opacity: 0.3;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    position: absolute;
    z-index: -1;
  }
`;
