import React from 'react';

//Bootstrap component
import { Alert } from 'react-bootstrap';

const Poem = (props) => {
  return (
    <Alert variant={props.currentTheme.variant}>
      <Alert.Heading className="text-center">Dear applicant !</Alert.Heading>
      <p className="text-center">
        Three Rings for the Elven Lords under the Sky Seven for the Dwarf
        <br></br>
        Lords in their halls of Stone Nine for Mortal Men doomed to die One
        <br></br>
        for the Dark Lord on his dark throne In the Land of Mordor where the
        <br></br>
        Shadows lie One Shift to rule them all, One Shift to find them One
        <br></br>
        Shift to bring them all and in the darkness bind them.<br></br>
      </p>

      <hr />
      <p className="mb-0 text-center">Start your journey ↓</p>
    </Alert>
  );
};

export default Poem;
