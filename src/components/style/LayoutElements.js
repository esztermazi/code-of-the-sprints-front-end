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
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 600px) {
    width: 100%;
    flex-direction: column;
    margin-bottom: 20px;
  }
`;

export const Background = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
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

export const StyledButton = styled.button`
  border: none;
  background: ${(props) => props.buttonBackgroundColor};
  color: ${(props) => props.buttonTextColor} !important;
  font-weight: 100;
  padding: 10px;
  border-radius: 6px;
  display: inline-block;
  transition: all 0.3s ease 0s;
  &:focus {
    outline: none;
  }
  &:hover {
    background: ${(props) => props.buttonBackgroundHoverColor};
    font-weight: 700 !important;
    letter-spacing: 3px;
    -webkit-box-shadow: 0px 5px 40px -10px rgba(0, 0, 0, 0.57);
    -moz-box-shadow: 0px 5px 40px -10px rgba(0, 0, 0, 0.57);
    transition: all 0.3s ease 0s;
  }
`;
