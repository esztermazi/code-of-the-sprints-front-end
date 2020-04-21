import React, { useContext } from 'react';

//Context
import { ThemeContext, ThemeProvider } from '../../contexts/ThemeContext';

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
          <Nav.Link className={currentTheme.textColor} href="/profile">
            Profile
          </Nav.Link>
          <Nav.Link className={currentTheme.textColor} href="/high-score">
            High score
          </Nav.Link>
          <Nav.Link className={currentTheme.textColor} href="/contacts">
            Contacts
          </Nav.Link>
          <Dropdown>
            <Dropdown.Toggle variant={currentTheme.variant}>
              Change Theme
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
