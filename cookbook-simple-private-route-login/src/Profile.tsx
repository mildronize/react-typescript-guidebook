import React, { useEffect, useState } from 'react';
import { ApplicationPaths } from './auth/constants';

function Profile() {

  const handleLogout = () => {
    location.href = `#${ApplicationPaths.Logout}`;
  };

  return (
    <div className="container">
      Profile

      <p>  <button onClick={handleLogout}>Logout</button></p>
    </div>

  );
}

export default Profile;
