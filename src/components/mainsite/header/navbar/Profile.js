//Packages
import React, { useContext } from 'react';
import Footer from '../../mainmenu/Footer';

//Contexts
import { ThemeContext, ThemeProvider } from '../../../contexts/ThemeContext';

//Components
import AppTheme from '../../../../static/util/AppTheme';

const Profile = () => {
  const theme = useContext(ThemeContext)[0];
  const currentTheme = AppTheme[theme];

  return (
    <ThemeProvider value={currentTheme}>
      <Footer currentTheme={currentTheme} />
    </ThemeProvider>
  );
};

export default Profile;
