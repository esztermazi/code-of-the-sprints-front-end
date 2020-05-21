//Packages
import { useState, useCallback } from 'react';

//Components
import {
  DocTypes,
  randomDocType,
} from '../../../../../static/util/OrderBuilderDocTypes';
import { STAGE_WIDTH, checkCollision } from '../GameHelper';

export const usePlayer = () => {
  const [player, setPlayer] = useState({
    pos: { x: 0, y: 0 },
    docType: DocTypes[0].shape,
    collided: false,
  });

  const rotate = (matrix, dir) => {
    const rotatedDoc = matrix.map((_, index) =>
      matrix.map((col) => col[index])
    );
    if (dir > 0) return rotatedDoc.map((row) => row.reverse());
    return rotatedDoc.reverse();
  };

  const playerRotate = (stage, dir) => {
    const clonedPlayer = JSON.parse(JSON.stringify(player));
    clonedPlayer.docType = rotate(clonedPlayer.docType, dir);

    const pos = clonedPlayer.pos.x;
    let offset = 1;
    while (checkCollision(clonedPlayer, stage, { x: 0, y: 0 })) {
      clonedPlayer.pos.x += offset;
      offset = -(offset + (offset > 0 ? 1 : -1));
      if (offset > clonedPlayer.doctype[0].length) {
        rotate(clonedPlayer.docType, -dir);
        clonedPlayer.pos.x = pos;
        return;
      }
    }
    setPlayer(clonedPlayer);
  };

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

  return [player, updatePlayerPos, resetPlayer, playerRotate];
};
