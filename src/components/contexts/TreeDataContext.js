//Packages
import React, { createContext, useState } from 'react';

//Components
import { ShireTreeData as shire } from '../../static/util/ShireTreeData';

export const TreeDataContext = createContext();

export const TreeDataProvider = (props) => {
  const [rootData, setRootData] = useState(shire);
  const [dataSource, setDataSource] = useState(shire);

  return (
    <TreeDataContext.Provider
      value={{ dataSource, setDataSource, rootData, setRootData }}
    >
      {props.children}
    </TreeDataContext.Provider>
  );
};
