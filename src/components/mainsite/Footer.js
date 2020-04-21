import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

//Components
import { ThemeProvider, ThemeContext } from '../contexts/ThemeContext';
import AppTheme from '../../static/util/AppTheme';

const Footer = (props) => {
  const theme = useContext(ThemeContext)[0];
  let currentTheme = AppTheme[theme];

  return (
    <ThemeProvider value={currentTheme}>
      <Link
        to={{
          pathname: `/home-of-the-sprints`,
        }}
      >
        <Button variant={currentTheme.variant}>Back to Home</Button>
      </Link>
    </ThemeProvider>
  );
};

export default Footer;
