/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut} from 'firebase/auth'
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
        setLoading(true)
        return signInWithEmailAndPassword(email,password)
    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth)
    }
    

    const authInfo = {
        user,
        loading,
        createUser,
        loginUser,
        logOut


    }


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;