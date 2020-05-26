//Packages
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledCardText = styled.p`
  color: ${(props) => props.textHoverColor};
  padding: 10px;
`;

export const StyledCardTitle = styled.p`
  color: ${(props) => props.color};
  position: absolute;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 20px;
  text-shadow: 2px 2px 4px #000000;
`;

export const StyledCardImg = styled.img`
  border-radius: 5px;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const StyledCardLink = styled(Link)`
  color: ${(props) => props.color};
  font-size: 40px;
  text-decoration: none;
  &:hover {
    color: ${(props) => props.hoverColor};
    text-decoration: none;
  }
`;

export const StyledCardInner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  border-radius: 5px;
`;

export const StyledCard = styled.div`
  background-color: transparent;
  width: 15rem;
  height: 300px;
  perspective: 1000px;
  &:hover ${StyledCardInner} {
    transform: rotateY(180deg);
  }
  margin: 10px;
`;

export const StyledCardFront = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  border-radius: 5px;
`;

export const StyledCardBack = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  border-radius: 5px;
  transform: rotateY(180deg);
`;

