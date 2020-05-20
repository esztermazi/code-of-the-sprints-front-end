//Packages
import React, { useContext, useEffect, useCallback } from 'react';

//Contexts
import { CharacterContext } from '../contexts/CharacterContext';

//Components
import GameList from './GameList';

const MainMenu = () => {
  const { character, setCharacterQuotes, quotes } = useContext(
    CharacterContext
  );

  const getQuotes = useCallback(() => {
    let quoteList = [];
    quotes.forEach((element) => {
      if (element.character === character._id) {
        quoteList.push(element);
      }
    });
    setCharacterQuotes(quoteList);
  }, [character._id, quotes, setCharacterQuotes]);

  useEffect(() => {
    getQuotes();
  }, [getQuotes]);

  return <GameList />;
};

export default MainMenu;
