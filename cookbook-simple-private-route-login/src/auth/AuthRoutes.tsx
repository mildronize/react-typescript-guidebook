import React from 'react';
import { Route } from 'react-router';
import { ApplicationPaths, LoginActions } from './constants';
import Login from './Login';

function AuthRoutes() {

  return (
    <>
      <Route exact path={ApplicationPaths.Login} render={() => loginAction(LoginActions.Login)} />
    </>
  );

  function loginAction(name) {
    return (<Login action={name}></Login>);
  }

  // function logoutAction(name) {
  //   return (<Logout action={name}></Logout>);
  // }

}

export default AuthRoutes;
