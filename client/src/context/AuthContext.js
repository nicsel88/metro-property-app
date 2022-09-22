import React, { useRef } from "react";
import { useState, useContext, useEffect } from "react";
import { createUserWithEmailAndPassword, sendEmailVerification, signOut, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from "../firebase";


const AuthContext = React.createContext();

export function UseAuth() {
    return useContext(AuthContext);
}

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState();
    const [loading, setLoading] = useState(true);
    const [credential, setCredential] = useState();

    function signIn(email, password) {
        try {
            return createUserWithEmailAndPassword(auth, email, password).then(async (user) => {
                console.log(user);
                const actionCodeSettings = {
                    url: 'http://localhost:8000/',
                    handleCodeInApp: true
                  };
                await sendEmailVerification(user.user, actionCodeSettings)
            })
        } catch (e) {
            console.log(e);
            return
        }

    }

    function login(email, password){
        return signInWithEmailAndPassword(auth, email, password)
    }

    async function logOut(){
        return signOut(auth);
    }

    async function toverifyEmail(user, email, password) {
        // verifyEmail(user, email, password)
    }


    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user);
            setLoading(false);

        })

        return unsubscribe
    })


    const value = {
        currentUser,
        signIn,
        logOut,
        login,
    }

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )

}