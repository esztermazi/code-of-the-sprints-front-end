//Packages
import React from 'react';
import { Link } from 'react-router-dom';
import { BoxArrowInLeft } from 'react-bootstrap-icons';

//Styled Components
import { StyledButton } from '../../style/LayoutElements';

const Footer = (props) => {
  return (
    <React.Fragment>
      <Link
        to={{
          pathname: `/code-of-the-sprints`,
        }}
      >
        <StyledButton
          buttonBackgroundColor={props.currentTheme.buttonBackgroundColor}
          buttonTextColor={props.currentTheme.buttonTextColor}
          buttonBackgroundHoverColor={
            props.currentTheme.buttonBackgroundHoverColor
          }
        >
          <BoxArrowInLeft /> Main Menu
        </StyledButton>
      </Link>
    </React.Fragment>
  );
};

export default Footer;
