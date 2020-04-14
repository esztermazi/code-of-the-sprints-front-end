import React from 'react';

//Bootstrap components
import { Navbar, Nav, Dropdown } from 'react-bootstrap';

const NavBar = () => {
  return (
    <Navbar>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Nav className="mr-auto">
        <Nav.Link href="/profile">Profile</Nav.Link>
        <Nav.Link href="/high-score">High score</Nav.Link>
        <Nav.Link href="/contacts">Contacts</Nav.Link>
        <Dropdown>
          <Dropdown.Toggle variant="success">Change Theme</Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item>Shire</Dropdown.Item>
            <Dropdown.Item>Mordor</Dropdown.Item>
            <Dropdown.Item>Gondor</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Nav>
    </Navbar>
  );
};

export default NavBar;
