import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const Footer = () => {
  return (
    <React.Fragment>
      <Link
        to={{
          pathname: `/main-menu`,
        }}
      >
        <Button variant="success">Back to main menu</Button>
      </Link>
    </React.Fragment>
  );
};

export default Footer;
