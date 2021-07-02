
import React, { useEffect, useState } from 'react';
import authService from './AuthService';
import { ApplicationPaths } from './constants';

function Logout() {

    useEffect(()=> {
      populateLogoutState();
    }, []);

    const populateLogoutState = () => {
      authService.signOut();
      location.href = `#${ApplicationPaths.Login}`;
    }

    return (
        <div className="container">
          loading...
        </div>
    );
}

export default Logout;
