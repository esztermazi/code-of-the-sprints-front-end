import React, { createContext, useState } from 'react';

import Houses from '../../static/util/Houses';

export const HouseContext = createContext();

export const HouseProvider = (props) => {
  const housesDefault = Houses;
  const [rootData, setRootData] = useState(housesDefault);

  return (
    <HouseContext.Provider value={{ rootData, setRootData }}>
      {props.children}
    </HouseContext.Provider>
  );
};
