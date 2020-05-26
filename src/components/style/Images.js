//Packages
import styled from 'styled-components';

export const AvatarImage = styled.img`
  height: 60px;
  width: 60px;
`;

export const IndexImage = styled.img`
  height: 300px;
  width: 410px;
  object-fit: cover;
  border-radius: 10px;
  -webkit-box-shadow: 0px 0px 17px 0px rgba(0, 0, 0, 0.41);
  -moz-box-shadow: 0px 0px 17px 0px rgba(0, 0, 0, 0.41);
  box-shadow: 0px 0px 17px 0px rgba(0, 0, 0, 0.41);
  background-size: cover;
`;

export const PoemImage = styled.img`
  height: 80%;
  width: 80%;
  object-fit: cover;
  @media screen and (max-width: 600px) {
    width: 100%;
    height: 50%;
  }
`;

export const LogoImage = styled.img`
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  height: 35%;
  width: 35%;
  cursor: pointer;
  @media screen and (max-width: 600px) {
    width: 100%;
    height: 100%;
  }
`;
