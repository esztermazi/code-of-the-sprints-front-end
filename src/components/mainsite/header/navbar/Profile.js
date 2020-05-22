//Packages
import React, { useContext, useEffect, useCallback } from 'react';
import Footer from '../../mainmenu/Footer';
import {
  ChevronRight,
  ChevronLeft,
  ChevronDoubleRight,
  ChevronDoubleLeft,
  ThreeDots,
} from 'react-bootstrap-icons';

//Contexts
import { ThemeContext, ThemeProvider } from '../../../contexts/ThemeContext';
import { CharacterContext } from '../../../contexts/CharacterContext';

//Components
import AppTheme from '../../../../static/util/AppTheme';

//Styled Components
import {
  Background,
  StyledColumnContainer,
} from '../../../style/LayoutElements';
import { AvatarImage } from '../../../style/Images';
import {
  StyledNavigationButton,
  StyledText,
  StyledPagination,
  StyledPaginationItem,
  DisabledPaginationItem,
  StyledTable,
} from '../../../style/ProfileElements';

const Profile = () => {
  const theme = useContext(ThemeContext)[0];
  const currentTheme = AppTheme[theme];
  const { character, avatar, characterQuotes, page, setPage } = useContext(
    CharacterContext
  );
  const quotesPerPage = 5;
  const firstPage = 1;
  const lastpage = Math.round(characterQuotes.length / quotesPerPage);
  const images = require.context('../../../../static/img/', true);
  let imgUrl = images(`./${currentTheme.backgroundImage}.png`);

  const openNewTab = () => {
    window.open(character.wikiUrl);
  };

  const changePage = useCallback(
    (event) => {
      if (event.target.name === 'prev') {
        setPage(page - 1);
      } else if (event.target.name === 'next') {
        setPage(page + 1);
      } else if (event.target.name === 'first') {
        setPage(firstPage);
      } else if (event.target.name === 'prev-five') {
        setPage(page - quotesPerPage);
      } else if (event.target.name === 'next-five') {
        setPage(page + quotesPerPage);
      } else if (event.target.name === 'last') {
        setPage(lastpage);
      } else {
        setPage(parseInt(event.target.innerText));
      }
    },
    [lastpage, page, setPage]
  );

  const setPagination = useCallback(() => {
    let items = [];

    if (page < quotesPerPage) {
      for (let i = firstPage + 1; i < page + quotesPerPage; i++) {
        items.push(
          <StyledPaginationItem onClick={changePage}>{i}</StyledPaginationItem>
        );
      }
    } else if (
      page >=
      Math.round(characterQuotes.length / quotesPerPage) - quotesPerPage
    ) {
      for (let i = lastpage - quotesPerPage - 1; i < lastpage; i++) {
        items.push(
          <StyledPaginationItem
            color={currentTheme.textColor}
            onClick={changePage}
          >
            {i}
          </StyledPaginationItem>
        );
      }
    } else {
      for (
        let i = Math.round(page - quotesPerPage / 2);
        i < Math.round(page + quotesPerPage / 2);
        i++
      ) {
        items.push(
          <StyledPaginationItem
            color={currentTheme.textColor}
            onClick={changePage}
          >
            {i}
          </StyledPaginationItem>
        );
      }
    }
    return items;
  }, [
    changePage,
    characterQuotes.length,
    currentTheme.textColor,
    lastpage,
    page,
  ]);

  useEffect(() => {}, [page, setPagination]);

  let items = setPagination();

  return (
    <ThemeProvider value={currentTheme}>
      <Background imgUrl={imgUrl}>
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
          <StyledPagination
            color={currentTheme.textColor}
            itemBackGround={currentTheme.itemBackGround}
          >
            {page !== 1 ? (
              <React.Fragment>
                <StyledPaginationItem name="first" onClick={changePage}>
                  <ChevronDoubleLeft name="first" />
                </StyledPaginationItem>
                <StyledPaginationItem name="prev" onClick={changePage}>
                  <ChevronLeft name="prev" />
                </StyledPaginationItem>
              </React.Fragment>
            ) : (
              <DisabledPaginationItem name="prev">
                <ChevronLeft name="prev" />
              </DisabledPaginationItem>
            )}
            <StyledPaginationItem
              color={currentTheme.color}
              onClick={changePage}
            >
              {firstPage}
            </StyledPaginationItem>
            {page > quotesPerPage ? (
              <StyledPaginationItem name="prev-five" onClick={changePage}>
                <ThreeDots name="prev-five" />
              </StyledPaginationItem>
            ) : null}
            {items}
            {page < lastpage - quotesPerPage ? (
              <StyledPaginationItem name="next-five" onClick={changePage}>
                <ThreeDots name="next-five" />
              </StyledPaginationItem>
            ) : null}
            <StyledPaginationItem
              color={currentTheme.color}
              onClick={changePage}
            >
              {lastpage}
            </StyledPaginationItem>
            {page !== lastpage ? (
              <React.Fragment>
                <StyledPaginationItem name="next" onClick={changePage}>
                  <ChevronRight name="next" />
                </StyledPaginationItem>
                <StyledPaginationItem name="last" onClick={changePage}>
                  <ChevronDoubleRight name="last" />
                </StyledPaginationItem>
              </React.Fragment>
            ) : (
              <DisabledPaginationItem name="next">
                <ChevronRight name="next" />
              </DisabledPaginationItem>
            )}
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
                  page * quotesPerPage - quotesPerPage,
                  page * quotesPerPage
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
      </Background>
    </ThemeProvider>
  );
};

export default Profile;
