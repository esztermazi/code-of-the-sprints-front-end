//Packages
import React, { useContext, useState } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

//Contexts
import { ThemeContext } from './components/contexts/ThemeContext';
import { LoginContext } from './components/contexts/LoginContext';
import { TreeDataProvider } from './components/contexts/TreeDataContext';
import { CharacterProvider } from './components/contexts/CharacterContext';

//Components
import LoginSite from './components/LoginSite';
import Index from './components/Index';
import MainSite from './components/MainSite';
import GateInvaders from './components/mainsite/mainmenu/GateInvaders';
import OrderBuilder from './components/mainsite/mainmenu/OrderBuilder';
import TheBlackGate from './components/mainsite/mainmenu/TheBlackGate';
import Profile from './components/mainsite/header/navbar/Profile';
import HighScore from './components/mainsite/header/navbar/HighScore';
import Contacts from './components/mainsite/header/navbar/Contacts';

const App = () => {
  const { hasPassword } = useContext(LoginContext);
  const themeHook = useState('shire');

  return (
    <ThemeContext.Provider value={themeHook}>
      <Router>
        <Route exact path="/" component={LoginSite} />
        <Route
          render={() => (hasPassword ? false : <Redirect to="/" />)}
        ></Route>
        <Route exact path="/gate-invaders" component={GateInvaders} />
        <Route exact path="/order-builder" component={OrderBuilder} />
        <Route exact path="/the-black-gate" component={TheBlackGate} />
        <CharacterProvider>
          <Route exact path="/home-of-the-sprints" component={Index} />
          <Route exact path="/profile" component={Profile} />
        </CharacterProvider>

        <Route exact path="/high-score" component={HighScore} />
        <TreeDataProvider>
          <Route exact path="/code-of-the-sprints" component={MainSite} />
          <Route exact path="/contacts" component={Contacts} />
        </TreeDataProvider>
      </Router>
    </ThemeContext.Provider>
  );
};

export default App;
