//Packages
import React, { createContext, useState, useCallback } from 'react';
import Axios from 'axios';

export const CharacterContext = createContext();

export const CharacterProvider = (props) => {
  const [avatar, setAvatar] = useState(null);
  const [quotes, setQuotes] = useState([]);
  const [characterQuotes, setCharacterQuotes] = useState([]);
  const [characters, setCharacters] = useState([]);
  const [character, setCharacter] = useState(null);
  const jwtoken = 'HqWKrGhVEPjdE426i8wx';

  const fetchCharacters = useCallback((url) => {
    Axios.get(url, {
      headers: {
        Authorization: `Bearer ${jwtoken}`,
      },
    }).then((resp) => {
      let characterList = [];
      for (const page in resp.data.docs) {
        let character = resp.data.docs[page];
        if (character.name === 'Frodo Baggins') {
          characterList.push(character);
        }
        if (character.name === 'Samwise Gamgee') {
          characterList.push(character);
        }
        if (character.name === 'Peregrin Took') {
          characterList.push(character);
        }
        if (character.name === 'Meriadoc Brandybuck') {
          characterList.push(character);
        }
        if (character.name === 'Gandalf') {
          characterList.push(character);
        }
        if (character.name.includes('Aragorn II')) {
          characterList.push(character);
        }
        if (character.name === 'Legolas') {
          characterList.push(character);
        }
        if (character.name === 'Gimli') {
          characterList.push(character);
        }
        if (character.name === 'Boromir') {
          characterList.push(character);
        }
      }
      setCharacters(characterList);
    });
  }, []);

  const fetchQuotes = useCallback((url) => {
    Axios.get(url, {
      headers: {
        Authorization: `Bearer ${jwtoken}`,
      },
    }).then((resp) => {
      setQuotes(resp.data.docs);
    });
  }, []);

  return (
    <CharacterContext.Provider
      value={{
        avatar,
        setAvatar,
        quotes,
        setQuotes,
        characterQuotes,
        setCharacterQuotes,
        characters,
        setCharacters,
        character,
        setCharacter,
        fetchCharacters,
        fetchQuotes,
      }}
    >
      {props.children}
    </CharacterContext.Provider>
  );
};
