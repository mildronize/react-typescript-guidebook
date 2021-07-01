import React, { useEffect, useState } from 'react';

function Login() {

    return (
        <div className="container">
            <h1>Login Demo (Private Route)</h1>
            <label htmlFor="uname"><b>Username</b></label>
            <input type="text" placeholder="Enter Username" name="uname" required />

            <label htmlFor="psw"><b>Password</b></label>
            <input type="password" placeholder="Enter Password" name="psw" required />

            <p>
                <button type="submit">Login</button>
            </p>
        </div>

    );
}

export default Login;
