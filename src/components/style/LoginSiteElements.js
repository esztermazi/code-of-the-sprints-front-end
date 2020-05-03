//Packages
import styled from 'styled-components';

export const Textarea = styled.textarea`
  background-color: white;
  color: black;
  width: 30%;
  border-radius: 8px;
  padding: 10px;
  text-align: center;
  resize: none;
  font-size: 18px;
  &:focus {
    outline: none;
  }
  &:hover {
    cursor: not-allowed;
  }
`;

export const MicrophonAlert = styled.div`
  color: white;
`;
