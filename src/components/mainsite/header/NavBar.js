import React, { useContext } from 'react';

//Context
import { ThemeContext, ThemeProvider } from '../../contexts/ThemeContext';

//Packages
import { Link } from 'react-router-dom';

//Components
import AppTheme from '../../../static/util/AppTheme';

//Bootstrap components
import { Navbar, Nav, Dropdown } from 'react-bootstrap';

const NavBar = () => {
  const [theme, setTheme] = useContext(ThemeContext);
  const currentTheme = AppTheme[theme];

  const changeTheme = (e) => {
    setTheme(e.target.id);
  };

  return (
    <ThemeProvider value={currentTheme}>
      <Navbar>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Nav>
          <Link to="/profile">
            <Nav.Item className={currentTheme.textColor}>Profile</Nav.Item>
          </Link>
          <Link to="/high-score">
            <Nav.Item className={currentTheme.textColor}>High score</Nav.Item>
          </Link>
          <Link to="/contacts">
            <Nav.Item className={currentTheme.textColor}>Contacts</Nav.Item>
          </Link>
          <Dropdown>
            <Dropdown.Toggle variant={currentTheme.variant}>
              Theme
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item onClick={changeTheme} id="shire">
                Shire
              </Dropdown.Item>
              <Dropdown.Item onClick={changeTheme} id="mordor">
                Mordor
              </Dropdown.Item>
              <Dropdown.Item onClick={changeTheme} id="gondor">
                Gondor
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Nav>
      </Navbar>
    </ThemeProvider>
  );
};

export default NavBar;
