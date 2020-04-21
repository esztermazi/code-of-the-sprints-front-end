import React, { useState } from 'react';

//Components
import WelcomeSite from './components/WelcomeSite';
import Index from './components/Index';
import MainSite from './components/MainSite';
import GateInvaders from './components/mainsite/mainmenu/GateInvaders';
import OrderBuilder from './components/mainsite/mainmenu/OrderBuilder';
import TheBlackGate from './components/mainsite/mainmenu/TheBlackGate';
import Profile from './components/mainsite/header/navbar/Profile';
import HighScore from './components/mainsite/header/navbar/HighScore';
import Contacts from './components/mainsite/header/navbar/Contacts';

//Contexts
import { ThemeContext } from './components/contexts/ThemeContext';

//Packages
import { BrowserRouter as Router, Route } from 'react-router-dom';

const App = () => {
  const themeHook = useState('shire');

  return (
    <ThemeContext.Provider value={themeHook}>
      <Router>
        <Route exact path="/" component={WelcomeSite} />
        <Route exact path="/home-of-the-sprints" component={Index} />
        <Route exact path="/scores-of-the-sprints" component={MainSite} />
        <Route exact path="/gate-invaders" component={GateInvaders} />
        <Route exact path="/order-builder" component={OrderBuilder} />
        <Route exact path="/the-black-gate" component={TheBlackGate} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/high-score" component={HighScore} />
        <Route exact path="/contacts" component={Contacts} />
      </Router>
    </ThemeContext.Provider>
  );
};

export default App;
