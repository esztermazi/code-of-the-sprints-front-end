//Packages
import React, { createContext, useState } from 'react';


//Components
export const LoginContext = createContext();

export const LoginProvider = (props) => {
  const [hasPassword, setHasPassword] = useState(false);

  return (
    <LoginContext.Provider value={{ hasPassword, setHasPassword }}>
      {props.children}
    </LoginContext.Provider>
  );
};
