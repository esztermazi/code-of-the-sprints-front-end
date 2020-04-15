import React, { useContext } from 'react';
import Footer from '../../Footer';

//Context
import { ThemeContext, ThemeProvider } from '../../../contexts/ThemeContext';

//Components
import AppTheme from '../../../../static/util/AppTheme';

function Profile() {
  const theme = useContext(ThemeContext)[0];
  const currentTheme = AppTheme[theme];

  return (
    <ThemeProvider value={currentTheme}>
      <div>Profile page</div>
      <Footer />
    </ThemeProvider>
  );
}

export default Profile;
