//Packages
import React, { useContext, useEffect, useCallback } from 'react';
import Footer from '../../mainmenu/Footer';
import { Table } from 'react-bootstrap';

//Contexts
import { ThemeContext, ThemeProvider } from '../../../contexts/ThemeContext';
import { CharacterContext } from '../../../contexts/CharacterContext';

//Components
import AppTheme from '../../../../static/util/AppTheme';

//Styled Components
import {
  BackgroundContainer,
  StyledColumnContainer,
} from '../../../style/LayoutElements';
import { AvatarImage } from '../../../style/Images';
import { StyledCardText } from '../../../style/MainMenuElements';
import { StyledNavigationButton } from '../../../style/ProfileElements';

const Profile = () => {
  const theme = useContext(ThemeContext)[0];
  const currentTheme = AppTheme[theme];
  const { character, avatar, characterQuotes } = useContext(CharacterContext);

  console.log(characterQuotes);
  console.log(character);

  const openNewTab = () => {
    window.open(character.wikiUrl);
  };

  return (
    <ThemeProvider value={currentTheme}>
      <BackgroundContainer
        style={{
          backgroundColor: currentTheme.bodyBackground,
        }}
      >
        <StyledColumnContainer>
          <AvatarImage src={avatar} alt="avatar"></AvatarImage>
          <StyledCardText>{character.name}</StyledCardText>
          <StyledCardText>{character.race}</StyledCardText>
          <StyledNavigationButton
            onClick={openNewTab}
            color={currentTheme.textColor}
            textHoverColor={currentTheme.textHoverColor}
          >
            Wanna know more?
          </StyledNavigationButton>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Quotes</th>
              </tr>
            </thead>
            <tbody>
              {characterQuotes.slice(0, 5).map((quote) => (
                <tr>
                  <td>"{quote.dialog}"</td>
                </tr>
              ))}
            </tbody>
          </Table>
          <Footer currentTheme={currentTheme} />
        </StyledColumnContainer>
      </BackgroundContainer>
    </ThemeProvider>
  );
};

export default Profile;
