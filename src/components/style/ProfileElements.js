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
  &:focus {
    outline: none;
  }
`;

export const StyledText = styled.p`
  color: ${(props) => props.color};
`;

export const StyledTable = styled.table`
  color: ${(props) => props.color};
  &&& {
    table,
    th,
    td {
      border: 1px solid;
      border-color: ${(props) => props.borderColor};
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
    table {
      width: 100%;
    }
    tr:nth-child(even) {
      background-color: ${(props) => props.itemBackGround};
    }
  }
  tr:hover {
    background-color: ${(props) => props.itemHoverBackGround} !important;
  }
`;
