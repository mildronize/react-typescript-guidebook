import React from 'react';
import { Route } from 'react-router';
import { ApplicationPaths } from './constants';
import Login from './Login';
import Logout from './Logout';

function AuthRoutes() {

  return (
    <>
      <Route exact path={ApplicationPaths.Login} component={Login} />
      <Route exact path={ApplicationPaths.Logout} component={Logout} />
    </>
  );

}

export default AuthRoutes;
