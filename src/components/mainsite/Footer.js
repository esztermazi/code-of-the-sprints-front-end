//Packages
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { BoxArrowInLeft } from 'react-bootstrap-icons';

//Components
import { ThemeProvider, ThemeContext } from '../contexts/ThemeContext';
import AppTheme from '../../static/util/AppTheme';

//Styled Components
import { StyledButton } from '../style/LayoutElements';

const Footer = (props) => {
  const theme = useContext(ThemeContext)[0];
  const currentTheme = AppTheme[theme];

  return (
    <ThemeProvider value={currentTheme}>
      <Link
        to={{
          pathname: `/home-of-the-sprints`,
        }}
      >
        <StyledButton
          buttonBackgroundColor={currentTheme.buttonBackgroundColor}
          buttonTextColor={currentTheme.buttonTextColor}
          buttonBackgroundHoverColor={currentTheme.buttonBackgroundHoverColor}
        >
          <BoxArrowInLeft /> Home
        </StyledButton>
      </Link>
    </ThemeProvider>
  );
};

export default Footer;
