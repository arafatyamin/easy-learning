import React, { useEffect } from 'react';
import { createContext } from 'react';
import {getAuth, onAuthStateChanged, signInWithPopup} from 'firebase/auth';
import app from '../../firebase/firebase';
import { useState } from 'react';

export const AuthContext = createContext();

const auth = getAuth(app)


const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);

    const providerLogIn = (provider) => {
        return signInWithPopup(auth, provider);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
            console.log('user inside state change', currentUser);
            setUser(currentUser);
        });

        return () => {
            unsubscribe();
        }
    },[]);


    const authInfo = {user, providerLogIn}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;