//Packages
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Dropdown } from 'react-bootstrap';

//Contexts
import { ThemeContext, ThemeProvider } from '../../contexts/ThemeContext';
import { TreeDataContext } from '../../contexts/TreeDataContext';

//Components
import AppTheme from '../../../static/util/AppTheme';
import { ShireTreeData as shire } from '../../../static/util/ShireTreeData';
import { MordorTreeData as mordor } from '../../../static/util/MordorTreeData';
import { GondorTreeData as gondor } from '../../../static/util/GondorTreeData';

//Styled Components
import { StyledNavbarLink } from '../../style/NavbarElements';

const NavBar = () => {
  const [theme, setTheme] = useContext(ThemeContext);
  const currentTheme = AppTheme[theme];
  const { setDataSource, setRootData } = useContext(TreeDataContext);
  const dataSources = { shire, mordor, gondor };

  const changeTheme = (e) => {
    setTheme(e.target.id);
    changeContactsDefaultData(dataSources, e.target.id);
  };

  const changeContactsDefaultData = (dataSources, key) => {
    setDataSource(dataSources[key]);
    setRootData(dataSources[key]);
  };

  return (
    <ThemeProvider value={currentTheme}>
      <Navbar>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Nav>
          <StyledNavbarLink
            to="/profile"
            color={currentTheme.textColor}
            hoverColor={currentTheme.textHoverColor}
          >
            Profile
          </StyledNavbarLink>
          <StyledNavbarLink
            to="/high-score"
            color={currentTheme.textColor}
            hoverColor={currentTheme.textHoverColor}
          >
            High score
          </StyledNavbarLink>
          <StyledNavbarLink
            to="/contacts"
            color={currentTheme.textColor}
            hoverColor={currentTheme.textHoverColor}
          >
            Contacts
          </StyledNavbarLink>
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
