import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, updateProfile} from 'firebase/auth';
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
    const updateUser = (userInfo) => {
        return updateProfile(user, userInfo);
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
        updateUser,
        user
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;