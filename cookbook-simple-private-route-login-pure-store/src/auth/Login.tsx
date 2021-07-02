import React, { useRef, useState } from "react";
import * as AuthService from './AuthService';

const Login = () => {
  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    const username = usernameRef.current.value;
    const password = passwordRef.current.value;
    setLoading(true);
    const result = await AuthService.signIn(username, password);
    setError(!result);
    setLoading(false);
    if (result) {
      location.href = "#/profile";
    } else {
      setMessage("Username or Password wrong");
    }
  }

  return <> <div className="container">
    <h1>Login Demo (Private Route)</h1>
    <label htmlFor="uname"><b>Username</b></label>
    <input ref={usernameRef} type="text" placeholder="Enter Username" name="uname" required />

    <label htmlFor="psw"><b>Password</b></label>
    <input ref={passwordRef} type="password" placeholder="Enter Password" name="psw" required />

    <p>User: demo, Password: demo</p>

    <p>
      <button type="submit" onClick={(e) => handleSubmit(e)}>Login</button>
    </p>

    {loading && <div className="loader"></div>}
    {!loading && error && <div className="error-msg">{message}</div>}
  </div>
  </>;
};

export default Login;
