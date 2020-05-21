//Packages
import { useState, useEffect } from 'react';

//Components
import { createStage } from '../GameHelper';

export const useStage = (player, resetPlayer) => {
  const [stage, setStage] = useState(createStage());

  useEffect(() => {
    const updateStage = (prevStage) => {
      const newStage = prevStage.map((row) =>
        row.map((cell) => (cell[1] === 'clear' ? [0, 'clear'] : cell))
      );

      player.docType.forEach((row, y) => {
        row.forEach((value, x) => {
          if (value !== 0) {
            newStage[y + player.pos.y][x + player.pos.x] = [
              value,
              `${player.collided ? 'merged' : 'clear'}`,
            ];
          }
        });
      });

      return newStage;
    };

    setStage((prev) => updateStage(prev));
  }, [player.collided, player.docType, player.pos.x, player.pos.y]);

  return [stage, setStage];
};
