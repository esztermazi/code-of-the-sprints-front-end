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
import { AvatarImage } from './style/Images';

//Images
import frodo from '../static/img/avatars/Frodo.png';
import sam from '../static/img/avatars/Sam.png';
import pippin from '../static/img/avatars/Pippin.png';
import merry from '../static/img/avatars/Merry.png';
import gandalf from '../static/img/avatars/Gandalf.png';
import aragorn from '../static/img/avatars/Aragorn.png';
import legolas from '../static/img/avatars/Legolas.png';
import gimli from '../static/img/avatars/Gimli.png';
import boromir from '../static/img/avatars/Boromir.png';

const Index = () => {
  const theme = useContext(ThemeContext)[0];
  const { name, setName, avatar, setAvatar } = useContext(CharacterContext);
  const currentTheme = AppTheme[theme];
  const avatars = {
    frodo,
    sam,
    pippin,
    merry,
    gandalf,
    aragorn,
    legolas,
    gimli,
    boromir,
  };
  const images = require.context('../static/img/', true);
  let indexImageUrl = images(`./${currentTheme.indexPic}.png`);

  const changeCharacter = (e) => {
    setName(e.target.id);
    setAvatar(avatars[e.target.id]);
  };

  const showCaracterPic = (e) => {
    setName(e.target.id);
    setAvatar(avatars[e.target.id]);
  };

  useEffect(() => {}, [name, avatar]);

  return (
    <ThemeProvider value={currentTheme}>
      <BackgroundContainer
        style={{
          backgroundColor: currentTheme.bodyBackground,
        }}
      >
        <StyledColumnContainer>
          <Poem currentTheme={currentTheme} />
          <AvatarImage src={avatar} alt="avatar"></AvatarImage>
          <Dropdown>
            <Dropdown.Toggle variant={currentTheme.variant}>
              Choose character
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item
                onClick={changeCharacter}
                onMouseOver={showCaracterPic}
                id="frodo"
              >
                Frodo
              </Dropdown.Item>
              <Dropdown.Item
                onClick={changeCharacter}
                onMouseOver={showCaracterPic}
                id="sam"
              >
                Sam
              </Dropdown.Item>
              <Dropdown.Item
                onClick={changeCharacter}
                onMouseOver={showCaracterPic}
                id="pippin"
              >
                Pippin
              </Dropdown.Item>
              <Dropdown.Item
                onClick={changeCharacter}
                onMouseOver={showCaracterPic}
                id="merry"
              >
                Merry
              </Dropdown.Item>
              <Dropdown.Item
                onClick={changeCharacter}
                onMouseOver={showCaracterPic}
                id="gandalf"
              >
                Gandalf
              </Dropdown.Item>
              <Dropdown.Item
                onClick={changeCharacter}
                onMouseOver={showCaracterPic}
                id="aragorn"
              >
                Aragorn
              </Dropdown.Item>
              <Dropdown.Item
                onClick={changeCharacter}
                onMouseOver={showCaracterPic}
                id="legolas"
              >
                Legolas
              </Dropdown.Item>
              <Dropdown.Item
                onClick={changeCharacter}
                onMouseOver={showCaracterPic}
                id="gimli"
              >
                Gimli
              </Dropdown.Item>
              <Dropdown.Item
                onClick={changeCharacter}
                onMouseOver={showCaracterPic}
                id="boromir"
              >
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
