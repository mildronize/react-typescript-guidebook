import React, { useEffect, useState } from 'react';

function LoginSuccess() {

    return (
        <div className="container">
           Login Success

           <p>  <button onClick={() => location.href="#/"}>Logout</button></p>
        </div>

    );
}

export default LoginSuccess;