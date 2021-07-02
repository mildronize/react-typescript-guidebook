
import React, { useEffect } from 'react';
import * as AuthService from './AuthService';
import { ApplicationPaths } from './constants';

function Logout() {

    useEffect(()=> {
      populateLogoutState();
    }, []);

    const populateLogoutState = () => {
      AuthService.signOut();
      location.href = `#${ApplicationPaths.Login}`;
    }

    return (
        <div className="container">
          loading...
        </div>
    );
}

export default Logout;
