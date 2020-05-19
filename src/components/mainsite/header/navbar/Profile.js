//Packages
import React, { useContext, useEffect, useCallback } from 'react';
import Footer from '../../mainmenu/Footer';

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
import {
  StyledNavigationButton,
  StyledText,
  StyledPagination,
  StyledTable,
} from '../../../style/ProfileElements';

const Profile = () => {
  const theme = useContext(ThemeContext)[0];
  const currentTheme = AppTheme[theme];
  const { character, avatar, characterQuotes, page, setPage } = useContext(
    CharacterContext
  );
  const quotesperPage = 5;

  const openNewTab = () => {
    window.open(character.wikiUrl);
  };

  const pageChanged = (event) => {
    console.log(characterQuotes);
    if (
      event.target.innerText === 'Previous' ||
      event.target.innerText === '‹'
    ) {
      setPage(page - 1);
    } else {
      setPage(event.target.innerText);
    }
  };

  

  useEffect(() => {}, [page]);

  return (
    <ThemeProvider value={currentTheme}>
      <BackgroundContainer color={currentTheme.bodyBackground}>
        <StyledColumnContainer>
          <AvatarImage src={avatar.imgPath} alt="avatar"></AvatarImage>
          <StyledText color={currentTheme.borderColor}>
            {character.name}
          </StyledText>
          <StyledText color={currentTheme.textColor}>
            {character.race}
          </StyledText>
          <StyledNavigationButton
            onClick={openNewTab}
            color={currentTheme.textColor}
            textHoverColor={currentTheme.textHoverColor}
          >
            Wanna know more?
          </StyledNavigationButton>
          <StyledPagination onClick={pageChanged}>
            <StyledPagination.First />
            <StyledPagination.Prev />
            <StyledPagination.Item>{1}</StyledPagination.Item>
            <StyledPagination.Item>{2}</StyledPagination.Item>
            <StyledPagination.Item>{3}</StyledPagination.Item>
            <StyledPagination.Ellipsis />
            <StyledPagination.Item>
              {Math.floor(characterQuotes.length / quotesperPage)}
            </StyledPagination.Item>
            <StyledPagination.Next />
            <StyledPagination.Last />
          </StyledPagination>
          <StyledTable
            color={currentTheme.textColor}
            borderColor={currentTheme.borderColor}
            itemBackGround={currentTheme.itemBackGround}
            itemHoverBackGround={currentTheme.itemHoverBackGround}
            tableHeaderTextColor={currentTheme.tableHeaderTextColor}
          >
            <thead>
              <tr>
                <th>Quotes</th>
              </tr>
            </thead>
            <tbody>
              {characterQuotes
                .slice(
                  page * quotesperPage - quotesperPage,
                  page * quotesperPage
                )
                .map((quote) => (
                  <tr>
                    <td>"{quote.dialog}"</td>
                  </tr>
                ))}
            </tbody>
          </StyledTable>
          <Footer currentTheme={currentTheme} />
        </StyledColumnContainer>
      </BackgroundContainer>
    </ThemeProvider>
  );
};

export default Profile;
