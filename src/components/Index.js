//Packages
import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Dropdown, Button } from 'react-bootstrap';
import { BoxArrowInLeft, BoxArrowInRight } from 'react-bootstrap-icons';

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
  StyledInLineContainer,
} from './style/LayoutElements';
import { StyledPoemContainer } from './style/IndexElements';
import { AvatarImage, PoemImage } from './style/Images';
import { StyledLink } from './style/NavbarElements';

//Images
import Pergamen from '../static/img/Pergamen.png';
import frodo from '../static/img/avatars/Frodo.png';
import samwise from '../static/img/avatars/Sam.png';
import peregrin from '../static/img/avatars/Pippin.png';
import meriadoc from '../static/img/avatars/Merry.png';
import gandalf from '../static/img/avatars/Gandalf.png';
import aragorn from '../static/img/avatars/Aragorn.png';
import legolas from '../static/img/avatars/Legolas.png';
import gimli from '../static/img/avatars/Gimli.png';
import boromir from '../static/img/avatars/Boromir.png';

const Index = () => {
  const theme = useContext(ThemeContext)[0];
  const { character, characters, setCharacter, avatar, setAvatar } = useContext(
    CharacterContext
  );
  const currentTheme = AppTheme[theme];
  const avatars = {
    frodo,
    samwise,
    peregrin,
    meriadoc,
    gandalf,
    aragorn,
    legolas,
    gimli,
    boromir,
  };
  const changeCharacter = (e) => {
    setAvatar({ name: e.target.id, imgPath: avatars[e.target.id] });
    characters.forEach((element) => {
      if (
        element.name.includes(
          e.target.id.charAt(0).toUpperCase() + e.target.id.substring(1)
        )
      ) {
        setCharacter(element);
      }
    });
  };

  const showCharacterPic = (e) => {
    setAvatar({ name: e.target.id, imgPath: avatars[e.target.id] });
  };

  const hideCharacterPic = (e) => {
    if (character === null) setAvatar(null);
    else if (
      !character.name.includes(
        avatar.name.charAt(0).toUpperCase() + avatar.name.substring(1)
      )
    ) {
      setAvatar(null);
      setCharacter(null);
    }
  };

  useEffect(() => {}, [avatar, character]);

  return (
    <ThemeProvider value={currentTheme}>
      <BackgroundContainer color={currentTheme.bodyBackground}>
        <StyledInLineContainer>
          <PoemImage src={Pergamen}></PoemImage>
          <StyledPoemContainer>
            <Poem currentTheme={currentTheme} />
          </StyledPoemContainer>
          <StyledColumnContainer>
            {avatar !== null ? (
              <AvatarImage src={avatar.imgPath} alt="avatar"></AvatarImage>
            ) : (
              <div></div>
            )}
            <Dropdown onBlur={hideCharacterPic}>
              <Dropdown.Toggle variant={currentTheme.variant}>
                Characters
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item
                  onClick={changeCharacter}
                  onMouseOver={showCharacterPic}
                  onChange={hideCharacterPic}
                  id="frodo"
                >
                  Frodo
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={changeCharacter}
                  onMouseOver={showCharacterPic}
                  onChange={hideCharacterPic}
                  id="samwise"
                >
                  Sam
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={changeCharacter}
                  onMouseOver={showCharacterPic}
                  onChange={hideCharacterPic}
                  id="peregrin"
                >
                  Pippin
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={changeCharacter}
                  onMouseOver={showCharacterPic}
                  onChange={hideCharacterPic}
                  id="meriadoc"
                >
                  Merry
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={changeCharacter}
                  onMouseOver={showCharacterPic}
                  onChange={hideCharacterPic}
                  id="gandalf"
                >
                  Gandalf
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={changeCharacter}
                  onMouseOver={showCharacterPic}
                  onChange={hideCharacterPic}
                  id="aragorn"
                >
                  Aragorn
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={changeCharacter}
                  onMouseOver={showCharacterPic}
                  onChange={hideCharacterPic}
                  id="legolas"
                >
                  Legolas
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={changeCharacter}
                  onMouseOver={showCharacterPic}
                  onChange={hideCharacterPic}
                  id="gimli"
                >
                  Gimli
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={changeCharacter}
                  onMouseOver={showCharacterPic}
                  onChange={hideCharacterPic}
                  id="boromir"
                >
                  Boromir
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            {character !== null ? (
              <StyledLink
                to="/code-of-the-sprints"
                color={currentTheme.textColor}
                hoverColor={currentTheme.textHoverColor}
              >
                Start journey <BoxArrowInRight />
              </StyledLink>
            ) : null}
            <Link to="/">
              <Button variant={currentTheme.variant}>
                <BoxArrowInLeft /> Doors of Durin
              </Button>
            </Link>
          </StyledColumnContainer>
        </StyledInLineContainer>
      </BackgroundContainer>
    </ThemeProvider>
  );
};

export default Index;
