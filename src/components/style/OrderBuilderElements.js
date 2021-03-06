//Packages
import styled from 'styled-components';

export const StyledCell = styled.div`
  width: auto;
  background: rgba(${(props) => props.color}, 0.8);
  border: ${(props) => (props.type === 0 ? '0px solid' : '4px solid')};
  border-bottom-color: rgba(${(props) => props.color}, 0.1);
  border-right-color: rgba(${(props) => props.color}, 1);
  border-top-color: rgba(${(props) => props.color}, 1);
  border-left-color: rgba(${(props) => props.color}, 0.3);
`;

export const StyledOrderBuilder = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 40px;
  margin: 0 auto;
  max-width: 900px;
  aside {
    width: 100%;
    max-width: 200px;
    display: block;
    padding: 0 20px;
  }
`;

export const StyledWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-size: cover;
  overflow: hidden;
`;

export const StyledStage = styled.div`
  display: grid;
  grid-template-rows: repeat(
    ${(props) => props.height},
    calc(25vw / ${(props) => props.width})
  );
  grid-template-columns: repeat(${(props) => props.width}, 1fr);
  grid-gap: 1px;
  border: 2px solid #333;
  width: 100%;
  max-width: 25vw;
  background: #111;
`;

export const StyledDisplay = styled.div`
  box-siying: border-box;
  display: flex;
  align-items: center;
  margin: 0 0 20px 0;
  padding: 20px;
  border: 4px solid ${(props) => props.borderColor};
  min-height: 30px;
  width: 100%;
  border-radius: 20px;
  background: ${(props) => props.itemBackGround};
  color: ${(props) => (props.gameOver ? 'red' : props.borderColor)};
  font-size: 0.8rem;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
`;

export const StyledStartButton = styled.button`
  box-sizing: border-box;
  margin: 0 0 20px 0;
  padding: 20px;
  min-height: 30px;
  width: 100%;
  border-radius: 20px;
  border: none;
  color: ${(props) => props.color};
  background: ${(props) => props.itemBackGround};
  transform: translateY(-5px);
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease 0s;
  font-size: 1rem;
  cursor: pointer;
  &:focus {
    outline: none;
  }
  &:hover {
    background: ${(props) => props.itemHoverBackGround};
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
`;
