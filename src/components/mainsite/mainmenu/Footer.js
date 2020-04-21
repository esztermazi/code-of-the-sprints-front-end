import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const Footer = (props) => {
  return (
    <React.Fragment>
      <Link
        to={{
          pathname: `/code-of-the-sprints`,
        }}
      >
        <Button variant={props.currentTheme.variant}>Back to main menu</Button>
      </Link>
    </React.Fragment>
  );
};

export default Footer;
