//Packages
import React from 'react';

//Styled Components
import { StyledPoem } from '../style/IndexElements';

const Poem = ({ currentTheme }) => {
  return (
    <StyledPoem color={currentTheme.textColor}>
      Dear applicant !<br></br>
      <br></br>
      Three Rings for the Elven Lords<br></br> under the Sky Seven for the Dwarf
      <br></br>
      Lords in their halls of Stone <br></br>Nine for Mortal Men doomed{' '}
      <br></br>to die One for the Dark Lord<br></br> on his dark throne In the
      Land<br></br> of Mordor where the Shadows<br></br> lie One Shift to rule{' '}
      them all,<br></br> One Shift to find them <br></br>One Shift to bring them
      all<br></br> and in the darkness bind them.<br></br>
    </StyledPoem>
  );
};

export default Poem;
