
import React, { useEffect, useState } from 'react';

function Logout() {

    const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        location.href="#/success";
    }

    return (
        <div className="container">
        </div>
    );
}

export default Logout;
