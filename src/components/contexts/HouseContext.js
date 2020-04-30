import React, { createContext, useState } from 'react';

import Houses from '../../static/util/Houses';

export const HouseContext = createContext();

export const HouseProvider = (props) => {
  const housesDefault = Houses;
  console.log(housesDefault);
  const [houses, setHouses] = useState(housesDefault);

  return (
    <HouseContext.Provider value={{ houses, setHouses }}>
      {props.children}
    </HouseContext.Provider>
  );
};
