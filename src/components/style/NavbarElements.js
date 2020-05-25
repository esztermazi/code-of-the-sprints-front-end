//Packages
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledNavbarLink = styled(Link)`
  color: ${(props) => props.color};
  font-size: 20px;
  margin: 5px;
  text-shadow: 0px 0px 1px #ffff;
  text-decoration: none;
  padding-right: 5px;
  transition: color 0.4s ease-in-out;
  transition: text-shadow 0.3s ease-in-out;
  &:hover {
    color: ${(props) => props.hoverColor};
    text-shadow: 1px 1px 3px ${(props) => props.hoverColor};
    text-decoration: none;
  }
`;

export const StyledLink = styled(Link)`
  color: ${(props) => props.color};
  text-decoration: none;
  text-shadow: 0px 0px 1px #ffff;
  transition: color 0.4s ease-in-out;
  transition: text-shadow 0.3s ease-in-out;
  &:hover {
    color: ${(props) => props.hoverColor};
    text-shadow: 1px 1px 3px ${(props) => props.hoverColor};
    text-decoration: none;
  }
`;
