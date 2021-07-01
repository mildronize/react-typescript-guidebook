import React, { useEffect, useState } from 'react';

function LoginFailed() {

    return (
        <div className="container">
           Failed
           <p>  <button onClick={() => location.href="#/"}>Go back to Login</button></p>
        </div>

    );
}

export default LoginFailed;
