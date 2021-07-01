import React from 'react';
import { ApplicationPaths } from './auth/constants';


function Home() {

  return (
    <div className="container">
      <h1>Welcome</h1>

      <p>  <button onClick={() => location.href = `#${ApplicationPaths.Login.substring(1)}`}>Go to Login</button></p>
    </div>

  );
}

export default Home;
