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
  const quotesPerPage = 5;
  const firstPage = 1;
  const lastpage = Math.round(characterQuotes.length / quotesPerPage);

  const openNewTab = () => {
    window.open(character.wikiUrl);
  };

  const changePage = useCallback(
    (event) => {
      if (
        event.target.innerText === '‹\nPrevious' ||
        event.target.innerText === '‹'
      ) {
        setPage(page - 1);
      } else if (
        event.target.innerText === '›\nNext' ||
        event.target.innerText === '›'
      ) {
        setPage(page + 1);
      } else if (
        event.target.innerText === '«\nFirst' ||
        event.target.innerText === '«'
      ) {
        setPage(firstPage);
      } else if (
        event.target.innerText === '…\nMore' ||
        event.target.innerText === '…'
      ) {
        console.log(event.target);
        if (event.target.name === 'prev-five') {
          setPage(page - quotesPerPage);
        } else {
          setPage(page + quotesPerPage);
        }
      } else if (
        event.target.innerText === '»\nLast' ||
        event.target.innerText === '»'
      ) {
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
          <StyledPagination.Item onClick={changePage}>
            {i}
          </StyledPagination.Item>
        );
      }
    } else if (
      page >=
      Math.round(characterQuotes.length / quotesPerPage) - quotesPerPage
    ) {
      for (let i = lastpage - quotesPerPage - 1; i < lastpage; i++) {
        items.push(
          <StyledPagination.Item onClick={changePage}>
            {i}
          </StyledPagination.Item>
        );
      }
    } else {
      for (
        let i = Math.round(page - quotesPerPage / 2);
        i < Math.round(page + quotesPerPage / 2);
        i++
      ) {
        items.push(
          <StyledPagination.Item onClick={changePage}>
            {i}
          </StyledPagination.Item>
        );
      }
    }
    return items;
  }, [changePage, characterQuotes.length, lastpage, page]);

  useEffect(() => {}, [page, setPagination]);

  let items = setPagination();

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
          <StyledPagination>
            {page !== 1 ? (
              <React.Fragment>
                <StyledPagination.First onClick={changePage} />
                <StyledPagination.Prev onClick={changePage} />
              </React.Fragment>
            ) : (
              <StyledPagination.Prev disabled />
            )}
            <StyledPagination.Item onClick={changePage}>
              {firstPage}
            </StyledPagination.Item>
            {page > quotesPerPage ? (
              <StyledPagination.Ellipsis
                name="prev-five"
                onClick={changePage}
              />
            ) : null}
            {items}
            {page < lastpage - quotesPerPage ? (
              <StyledPagination.Ellipsis
                name="next-five"
                onClick={changePage}
              />
            ) : null}
            <StyledPagination.Item onClick={changePage}>
              {lastpage}
            </StyledPagination.Item>
            {page !== lastpage ? (
              <React.Fragment>
                <StyledPagination.Next onClick={changePage} />
                <StyledPagination.Last onClick={changePage} />
              </React.Fragment>
            ) : (
              <StyledPagination.Next disabled />
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
      </BackgroundContainer>
    </ThemeProvider>
  );
};

export default Profile;
