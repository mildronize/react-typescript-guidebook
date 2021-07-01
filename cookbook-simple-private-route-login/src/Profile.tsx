import React, { useEffect, useState } from 'react';

function Profile() {

  const handleLogout = () => {
    location.href = "#/";
  };

  return (
    <div className="container">
      Profile

      <p>  <button onClick={handleLogout}>Logout</button></p>
    </div>

  );
}

export default Profile;
