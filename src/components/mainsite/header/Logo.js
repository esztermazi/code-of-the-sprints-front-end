import React from 'react';

//Image
import LogoPic from '../../../static/img/Logo.png';

const Logo = () => {
  return (
    <div className="logo">
      <img src={LogoPic} alt="logo" width="150" height="150"></img>
    </div>
  );
};

export default Logo;
