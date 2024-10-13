/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile} from 'firebase/auth'
import { app } from "../config/firebase.config";

export const AuthContext = createContext(null)

export const auth = getAuth(app)
const AuthProviders = ({children}) => {
    const [user,setUser] = useState(null)
    const [loading,setLoading] = useState(true)


    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth,currentUser => {
        setUser(currentUser)
        console.log(currentUser)
        setLoading(false)
      });
      return () => {
        unsubscribe()
      }
    }, [])

    const createUser =(email,password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const loginUser = (email,password) => {
        console.log('rr',email,password)
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth)
    }
    const updateUserProfile = (name,photoUrl) => {
        return updateProfile(auth.currentUser,{
            displayName:name,
            photoURL:photoUrl
        })
    }
    

    const authInfo = {
        user,
        loading,
        createUser,
        loginUser,
        logOut,
        updateUserProfile


    }


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;