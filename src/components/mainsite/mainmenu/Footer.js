//Packages
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { BoxArrowInLeft } from 'react-bootstrap-icons';

const Footer = (props) => {
  return (
    <React.Fragment>
      <Link
        to={{
          pathname: `/code-of-the-sprints`,
        }}
      >
        <Button variant={props.currentTheme.variant}>
          <BoxArrowInLeft /> Main Menu
        </Button>
      </Link>
    </React.Fragment>
  );
};

export default Footer;
