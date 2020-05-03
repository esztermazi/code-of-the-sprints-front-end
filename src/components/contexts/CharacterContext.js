//Packages
import React, { createContext, useState, useCallback } from 'react';
import Axios from 'axios';

export const CharacterContext = createContext();

export const CharacterProvider = (props) => {
  const [name, setName] = useState('');
  const [avatar, setAvatar] = useState({});
  const [quotes, setQuotes] = useState({});
  const jwtoken = 'HqWKrGhVEPjdE426i8wx';

  const fetchCharacter = useCallback((url) => {
    Axios.get(url, {
      headers: {
        Authorization: `Bearer ${jwtoken}`,
      },
    }).then((resp) => {
      let humanList = [];
      let elfList = [];
      let hobbitList = [];
      let dwarfList = [];
      for (const page in resp.data.docs) {
        let character = resp.data.docs[page];
        if (character.race === 'Human') {
          humanList.push(character);
        }
        if (character.race === 'Elf') {
          elfList.push(character);
        }
        if (character.race === 'Hobbit') {
          hobbitList.push(character);
        }
        if (character.race === 'Dwarf') {
          dwarfList.push(character);
        }
      }
      let characterList = {
        name: 'Races',
        children: [
          {
            name: 'Elves',
            children: elfList,
          },
          {
            name: 'Hobbits',
            children: hobbitList,
          },
          {
            name: 'Dwarfes',
            children: dwarfList,
          },
          {
            name: 'Humans',
            children: humanList,
          },
        ],
      };
    });
  }, []);

  return (
    <CharacterContext.Provider
      value={{
        name,
        setName,
        avatar,
        setAvatar,
        quotes,
        setQuotes,
        fetchCharacter,
      }}
    >
      {props.children}
    </CharacterContext.Provider>
  );
};
