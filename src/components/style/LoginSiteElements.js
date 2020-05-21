//Packages
import styled from 'styled-components';

export const StyledText = styled.p`
  color: white;
  font-size: 25px;
  padding: 10px;
`;

export const Textarea = styled.textarea`
  background-color: white;
  color: black;
  width: 20%;
  border-radius: 8px;
  margin: 10px;
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
