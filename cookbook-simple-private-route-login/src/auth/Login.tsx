import React, { useEffect, useRef, useState } from "react";
import authService from "./AuthService";
import { ApplicationPaths, LoginActions } from "./constants";
interface PropType {
  action: string;
}

const Login = ({ action, ...props }: PropType) => {
  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    init();
  }, []);

  const init = () => {
    switch (action) {
      case LoginActions.Login:
        login();
        break;
      // case LoginActions.LoginCallback:
      //   processLoginCallback();
      //   break;
      default:
        throw new Error(`Invalid Login action '${action}'`);
    }
  };

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    const username = usernameRef.current.value;
    const password = passwordRef.current.value;
    setLoading(true);
    const result = await authService.signIn(username, password);
    setLoading(false);
    if (result) {
      location.href = "#/profile";
    } else {
      location.href = `#${ApplicationPaths.Login.substring(1)}`;
    }
  }

  // const processLoginCallback = async () => {
  //   const url = window.location.href;
  //   const result = await authService.completeSignIn(url);
  // }

  const login = async () => {
    // await authService.signIn();
  };

  return <> <div className="container">
    <h1>Login Demo (Private Route)</h1>
    <label htmlFor="uname"><b>Username</b></label>
    <input ref={usernameRef} type="text" placeholder="Enter Username" name="uname" required />

    <label htmlFor="psw"><b>Password</b></label>
    <input ref={passwordRef} type="password" placeholder="Enter Password" name="psw" required />

    <p>
      For login
    </p>
    <p>User: demo, Password: demo</p>

    <p>
      <button type="submit" onClick={(e) => handleSubmit(e)}>Login</button>
    </p>

    {loading && <div className="loader"></div>}
  </div>
  </>;
};

export default Login;
