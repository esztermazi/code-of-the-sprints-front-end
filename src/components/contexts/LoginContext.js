import React, { createContext, useState } from 'react';

export const LoginContext = createContext();

export const LoginProvider = (props) => {
  const [isPasswordValid, setIsPasswordValid] = useState(false);

  return (
    <LoginContext.Provider value={{ isPasswordValid, setIsPasswordValid }}>
      {props.children}
    </LoginContext.Provider>
  );
};
