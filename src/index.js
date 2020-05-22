import React from 'react';
import ReactDOM from 'react-dom';
import { LoginProvider } from './components/contexts/LoginContext';
import App from './App';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

ReactDOM.render(
  <React.Fragment>
    <LoginProvider>
      <App />
    </LoginProvider>
  </React.Fragment>,
  document.getElementById('root')
);
