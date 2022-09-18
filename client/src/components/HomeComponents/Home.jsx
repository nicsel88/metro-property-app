import React from 'react';
import { useEffect, useRef } from 'react';
import { UseAuth } from '../../context/AuthContext';
import { Navigate } from 'react-router-dom';

export default function Home () {

    const { currentUser, signIn, logOut } = UseAuth();

    function tologOut() {
        logOut();
    }

    return (
        <div>
            {!currentUser && <Navigate to="/login"></Navigate>}
            <button onClick={() => { tologOut() }}>Logout</button>
        </div>
    )
}

