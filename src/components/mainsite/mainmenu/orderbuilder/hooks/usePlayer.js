//Packages
import { useState } from 'react';

//Components
import { randomDocType } from '../../../../../static/util/OrderBuilderDocTypes';

export const usePlayer = () => {
  const [player, setPlayer] = useState({
    pos: { x: 0, y: 0 },
    docType: randomDocType().shape,
    collided: false,
  });

  return [player];
};
