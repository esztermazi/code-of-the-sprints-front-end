//Packages
import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Dropdown, Button } from 'react-bootstrap';

//Contexts
import { ThemeContext, ThemeProvider } from './contexts/ThemeContext';
import { CharacterContext } from './contexts/CharacterContext';

//Components
import Poem from './mainsite/Poem';
import AppTheme from '../static/util/AppTheme';

//Sytled Components
import {
  BackgroundContainer,
  StyledColumnContainer,
} from './style/LayoutElements';

//Images

const Index = () => {
  const theme = useContext(ThemeContext)[0];
  const { name, setName } = useContext(CharacterContext);
  const currentTheme = AppTheme[theme];
  const images = require.context('../static/img/', true);
  let indexImageUrl = images(`./${currentTheme.indexPic}.png`);

  const changeCharacter = (e) => {
    setName(e.target.id);
  };

  useEffect(() => {}, [setName]);

  return (
    <ThemeProvider value={currentTheme}>
      <BackgroundContainer
        style={{
          backgroundColor: currentTheme.bodyBackground,
        }}
      >
        <StyledColumnContainer>
          <Poem currentTheme={currentTheme} />
          <Dropdown>
            <Dropdown.Toggle variant={currentTheme.variant}>
              Choose character
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item onClick={changeCharacter} id="frodo">
                Frodo
              </Dropdown.Item>
              <Dropdown.Item onClick={changeCharacter} id="sam">
                Sam
              </Dropdown.Item>
              <Dropdown.Item onClick={changeCharacter} id="pippin">
                Pippin
              </Dropdown.Item>
              <Dropdown.Item onClick={changeCharacter} id="merry">
                Merry
              </Dropdown.Item>
              <Dropdown.Item onClick={changeCharacter} id="gandalf">
                Gandalf
              </Dropdown.Item>
              <Dropdown.Item onClick={changeCharacter} id="aragorn">
                Aragorn
              </Dropdown.Item>
              <Dropdown.Item onClick={changeCharacter} id="legolas">
                Legolas
              </Dropdown.Item>
              <Dropdown.Item onClick={changeCharacter} id="gimli">
                Gimli
              </Dropdown.Item>
              <Dropdown.Item onClick={changeCharacter} id="boromir">
                Boromir
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Link to="/code-of-the-sprints">
            <img src={indexImageUrl} height={380} width={550} alt="poster" />
          </Link>
          <Link to="/">
            <Button variant={currentTheme.variant}>
              ￩I Want to speake Elvish again!
            </Button>
          </Link>
        </StyledColumnContainer>
      </BackgroundContainer>
    </ThemeProvider>
  );
};

export default Index;
