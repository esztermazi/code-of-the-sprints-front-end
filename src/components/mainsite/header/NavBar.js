import React, { useContext } from 'react';

//Context
import { ThemeContext } from '../../contexts/ThemeContext';

//Components
import AppTheme from '../../../static/util/AppTheme';

//Bootstrap components
import { Navbar, Nav, Dropdown } from 'react-bootstrap';

const NavBar = (props) => {
  const [theme, setTheme] = useContext(ThemeContext);

  const changeTheme = (e) => {
    setTheme(AppTheme[e.target.id]);
    console.log(theme);
  };

  return (
    <Navbar>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Nav className="mr-auto">
        <Nav.Link href="/profile">Profile</Nav.Link>
        <Nav.Link href="/high-score">High score</Nav.Link>
        <Nav.Link href="/contacts">Contacts</Nav.Link>
        <Dropdown>
          <Dropdown.Toggle variant={props.currentTheme.variant}>
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
  );
};

export default NavBar;
