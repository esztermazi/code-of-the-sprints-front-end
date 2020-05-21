//Packages
import { useState, useCallback } from 'react';

//Components
import {
  DocTypes,
  randomDocType,
} from '../../../../../static/util/OrderBuilderDocTypes';
import { STAGE_WIDTH } from '../GameHelper';

export const usePlayer = () => {
  const [player, setPlayer] = useState({
    pos: { x: 0, y: 0 },
    docType: DocTypes[0].shape,
    collided: false,
  });

  const updatePlayerPos = ({ x, y, collided }) => {
    setPlayer((prev) => ({
      ...prev,
      pos: { x: (prev.pos.x += x), y: (prev.pos.y += y) },
      collided,
    }));
  };

  const resetPlayer = useCallback(() => {
    setPlayer({
      pos: { x: STAGE_WIDTH / 2 - 2, y: 0 },
      docType: randomDocType().shape,
      collided: false,
    });
  }, []);

  return [player, updatePlayerPos, resetPlayer];
};
