import React, { useContext } from 'react';

//Bootstrap components
import { Alert } from 'react-bootstrap';

const Poem = (props) => {
  console.log(props.currentTheme.variant);

  return (
    <Alert variant={props.currentTheme.variant}>
      <Alert.Heading className="text-center">Dear applicant !</Alert.Heading>
      <parent className="text-center">
        Three Rings for the Elven Lords under the Sky Seven for the Dwarf\n
        <br></br>
        Lords in their halls of Stone Nine for Mortal Men doomed to die One
        <br></br>
        for the Dark Lord on his dark throne In the Land of Mordor where the
        <br></br>
        Shadows lie One Shift to rule them all, One Shift to find them One
        <br></br>
        Shift to bring them all and in the darkness bind them.<br></br>
      </parent>

      <hr />
      <p className="mb-0 text-center">Please Log in to start your journey ↓</p>
    </Alert>
  );
};

export default Poem;
