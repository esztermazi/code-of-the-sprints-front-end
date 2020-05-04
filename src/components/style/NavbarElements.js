//Packages
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledNavbarLink = styled(Link)`
  color: ${(props) => props.color};
  font-size: 20px;
  margin: 5px;
  text-decoration: none;
  &:hover {
    color: ${(props) => props.hoverColor};
    text-decoration: none;
  }
`;

export const StyledLink = styled(Link)`
  color: ${(props) => props.color};
  text-decoration: none;
  &:hover {
    color: ${(props) => props.hoverColor};
    text-decoration: none;
  }
`;
