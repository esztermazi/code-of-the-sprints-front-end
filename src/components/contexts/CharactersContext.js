import React, { createContext, useState, useCallback } from 'react';
import Axios from 'axios';

export const CharactersContext = createContext();

export const LoginProvider = (props) => {
  const [characters, setCharacters] = useState([]);

  const fetchCharacters = useCallback((url) => {
    Axios.get(url).then((resp) => {
      setCharacters(resp.data);
    });
  }, []);

  return (
    <CharactersContext.Provider
      value={{ characters, setCharacters, fetchCharacters }}
    >
      {props.children}
    </CharactersContext.Provider>
  );
};
