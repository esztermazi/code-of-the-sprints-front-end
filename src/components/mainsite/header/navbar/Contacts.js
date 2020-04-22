import React, { useContext, useEffect } from 'react';
import Footer from '../../mainmenu/Footer';

//Context
import { ThemeContext, ThemeProvider } from '../../../contexts/ThemeContext';
import { CharactersContext } from '../../../contexts/CharactersContext';
//Component
import AppTheme from '../../../../static/util/AppTheme';

const Contacts = () => {
  const theme = useContext(ThemeContext)[0];
  const currentTheme = AppTheme[theme];
  const { characters, fetchCharacters } = useContext(CharactersContext);

  useEffect(() => {
    fetchCharacters('https://the-one-api.herokuapp.com/v1/character');
  }, [fetchCharacters, characters]);

  return (
    <ThemeProvider value={currentTheme}>
      <div className={currentTheme.textColor}>Contacts page</div>
      <Footer currentTheme={currentTheme} />
    </ThemeProvider>
  );
};

export default Contacts;
