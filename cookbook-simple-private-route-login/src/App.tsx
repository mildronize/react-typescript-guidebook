import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import './App.css';
import Login from './auth/Login';
import LoginSuccess from './auth/LoginSuccess';
import LoginFailed from './auth/LoginFailed';
import PrivateRoute from './auth/PrivateRoute';


function App() {

  return (

    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <PrivateRoute exact path="/success" component={LoginSuccess} />
        <Route exact path="/failed" component={LoginFailed} />
      </Switch>
    </Router>

  );
}

export default App;
