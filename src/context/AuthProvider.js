import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword} from 'firebase/auth';
import { app } from '../firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);

    const SignupwithPassword = (email, password) =>{
        return  createUserWithEmailAndPassword(auth, email, password)
        
    }
    const loginWithEmailAndPassword = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    }
    useEffect(()=>{
     const unsubscribe = onAuthStateChanged(auth, (currtenUser) => {
            setUser(currtenUser)
        });
        return () =>  unsubscribe();
    },[])


    const authInfo = {
        SignupwithPassword,
        loginWithEmailAndPassword,
        user

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;