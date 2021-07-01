import React from 'react';
import './App.css';
import Login from './Login';
import LoginSuccess from './LoginSuccess';

import {
  HashRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {

  return (

    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/success" component={LoginSuccess} />
      </Switch>
    </Router>

  );
}

export default App;
