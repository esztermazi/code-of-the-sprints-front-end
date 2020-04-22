import React, { createContext, useState, useCallback } from 'react';
import Axios from 'axios';

export const CharactersContext = createContext();

export const CharactersProvider = (props) => {
  const [characters, setCharacters] = useState([]);
  const jwtoken = 'HqWKrGhVEPjdE426i8wx';

  const fetchCharacters = useCallback((url) => {
    Axios.get(url, {
      headers: {
        Authorization: `Bearer ${jwtoken}`,
      },
    }).then((resp) => {
      let humans = [];
      let elves = [];
      let hobbits = [];
      let dwarfes = [];
      for (const page in resp.data.docs) {
        let character = resp.data.docs[page];
        if (character.race === 'Human') {
          humans.push(character);
        }
        if (character.race === 'Elf') {
          elves.push(character);
        }
        if (character.race === 'Hobbit') {
          hobbits.push(character);
        }
        if (character.race === 'Dwarf') {
          dwarfes.push(character);
        }
      }
    });
  }, []);

  return (
    <CharactersContext.Provider
      value={{
        characters,
        setCharacters,
        fetchCharacters,
      }}
    >
      {props.children}
    </CharactersContext.Provider>
  );
};
