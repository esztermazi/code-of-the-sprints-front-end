import React from 'react';

//Components
import WelcomeSite from './components/WelcomeSite';
import MainSite from './components/MainSite';
import MainMenu from './components/mainsite/MainMenu';
import GateInvaders from './components/mainsite/mainmenu/menu/GateInvaders';
import OrderBuilder from './components/mainsite/mainmenu/menu/OrderBuilder';
import TheBlackGate from './components/mainsite/mainmenu/menu/TheBlackGate';
import Profile from './components/mainsite/header/navbar/Profile';
import HighScore from './components/mainsite/header/navbar/HighScore';
import Contacts from './components/mainsite/header/navbar/Contacts';

//Packages
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Route exact path="/" component={WelcomeSite} />
      <Route exact path="/scores-of-the-sprints" component={MainSite} />
      <Route exact path="/main-menu" component={MainMenu} />
      <Route exact path="/gate-invaders" component={GateInvaders} />
      <Route exact path="/order-builder" component={OrderBuilder} />
      <Route exact path="/the-black-gate" component={TheBlackGate} />
      <Route exact path="/profile" component={Profile} />
      <Route exact path="/high-score" component={HighScore} />
      <Route exact path="/contacts" component={Contacts} />
    </Router>
  );
}

export default App;
