import React, { useEffect, useState } from 'react';
import authService from './AuthService';
import { Route, Redirect } from 'react-router-dom';


const redirectUrl = "/failed";

function PrivateRoute(props: any) {

    const { component: Component, ...rest } = props;

    const [status, setStatus] = useState({
        loading: true,
        authenticated: false
    });

    useEffect(() => {
        const subscribeId = authService.subscribe(() => authenticationChanged());
        populateAuthenticationState();
        console.log(`subscribe with id: ${subscribeId}`);
        return () => {
          console.log(`unsubscribe with id: ${subscribeId}`);
          authService.unsubscribe(subscribeId);
        }
      }, []);

    const populateAuthenticationState = async () => {
        
        const authenticated = await authService.isAuthenticated();
        setStatus({ loading: false, authenticated });
    }

    const authenticationChanged = async () => {
        setStatus({ loading: true, authenticated: false });
        console.log("Call populateAuthenticationState");
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
    // return (
    //     <>
    //         {status.loading ? <div className="loader"></div> :
    //             <Route {...rest}
    //                 render={(props) => {
    //                     if (status.authenticated) {
    //                         return <Component {...props} />
    //                     } else {
    //                         return <Redirect to={redirectUrl} />
    //                     }
    //                 }} />
    //         }
    //     </>

    // );
}

export default PrivateRoute;
