import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import './App.css';
// import LoginForm from './auth/LoginForm';
import Profile from './Profile';
import PrivateRoute from './auth/PrivateRoute';
import { ApplicationPaths } from './auth/constants';
import AuthRoutes from './auth/AuthRoutes';
import Home from './Home';

function App() {

  return (

    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <PrivateRoute exact path="/profile" component={Profile} />
        <Route
          path={ApplicationPaths.AuthorizationPrefix}
          component={AuthRoutes}
        />
      </Switch>
    </Router>

  );
}

export default App;
