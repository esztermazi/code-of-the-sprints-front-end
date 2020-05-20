//Packages
import { useState } from 'react';

//Components
import { createStage } from '../GameHelper';

export const useStage = () => {
  const [stage, setStage] = useState(createStage());

  return [stage, setStage];
};
