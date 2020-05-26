//Packages
import styled from 'styled-components';

export const StyledNavigationButton = styled.button`
  color: ${(props) => props.color};
  background-color: transparent;
  border: none;
  margin: 10px;
  transition: text-shadow 0.2s ease-in-out;
  &:hover {
    color: ${(props) => props.textHoverColor};
    text-shadow: 1px 1px 3px ${(props) => props.hoverColor};
  }
  &:focus {
    outline: none;
  }
`;

export const StyledText = styled.p`
  color: ${(props) => props.color};
`;

export const StyledPagination = styled.div`
  display: inline-block;
  color: ${(props) => props.color};
  a {
    background-color: ${(props) => props.itemBackGround};
  }
  margin: 10px;
`;

export const StyledPaginationItem = styled.a`
  float: left;
  padding: 8px 16px;
  margin: 3px;
  text-decoration: none;
  transition: background-color 0.3s;
  border-radius: 7px;
  &:hover {
    color: #d3d3d3 !important;
    cursor: pointer;
  }
`;

export const DisabledPaginationItem = styled.a`
  color: #ddd !important;
  float: left;
  margin: 3px;
  padding: 8px 16px;
  text-decoration: none;
  transition: background-color 0.3s;
  cursor: not-allowed;
  border-radius: 7px;
`;

export const StyledTable = styled.table`
  color: ${(props) => props.color};
  margin: 10px;
  &&& {
    table,
    th,
    td {
      border: 1px solid ${(props) => props.borderColor};
    }
    th,
    td,
    tr {
      padding: 5px;
    }
    th {
      text-align: center;
      color: ${(props) => props.borderColor};
      background-color: ${(props) => props.itemBackGround};
    }
    th,
    table {
      width: 100%;
    }
    tr {
      background-color: ${(props) => props.itemHoverBackGround};
    }
    tr:nth-child(even) {
      background-color: ${(props) => props.itemBackGround} !important;
    }
    tr:hover {
      background-color: ${(props) => props.itemHoverBackGround} !important;
    }
  }
`;
