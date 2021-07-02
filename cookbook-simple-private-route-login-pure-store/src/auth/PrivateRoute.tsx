import React, { useEffect, useState } from 'react';
import * as AuthService from './AuthService';
import { Route, Redirect } from 'react-router-dom';
import { ApplicationPaths } from './constants';

const redirectUrl = `${ApplicationPaths.Login}`;

function PrivateRoute(props: any) {

    const { component: Component, ...rest } = props;

    const [status, setStatus] = useState({
        loading: true,
        authenticated: false
    });

    useEffect(() => {
        const unsubscribe = AuthService.store.subscribe(() => authenticationChanged());
        populateAuthenticationState();
        return () => unsubscribe();
      }, []);

    const populateAuthenticationState = async () => {
        const authenticated = AuthService.store.state.authenticated;
        setStatus({ loading: false, authenticated });
    }

    const authenticationChanged = async () => {
        setStatus({ loading: true, authenticated: false });
        await populateAuthenticationState();
    }


    if(status.loading){
        return <div className="loader"></div>;
    } else {
        return (
            <Route {...rest}
            render={(props) => {
                if (status.authenticated) {
                    return <Component {...props} />
                } else {
                    return <Redirect to={redirectUrl} />
                }
            }} />
        );
    }

}

export default PrivateRoute;
