import  { createContext } from 'react';
import {  GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile,} from "firebase/auth";
import { useEffect } from 'react';
import { useState } from 'react';
import app from '../Firebase/Firebase.config';




export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    
    // create user
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    
    // login
    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    
    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    const updateUserData=(user, name, photo)=>{
        updateProfile(user,{
            displayName:name,
            photoURL:photo

        })
        .then(()=>{
            
            console.log('name and photo updated') 
         })
         .catch(error=>{
             console.log(error.message)
         })
      
    }

    // sign in with google
    const googleProvider = new GoogleAuthProvider();
    const googleLogin=()=>{
        signInWithPopup(auth, googleProvider)
      
    }
   
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, loggedUser => {
            setUser(loggedUser);
            setLoading(false);
        })

        return () => {
            unsubscribe();
        }
    }, [])

    const authInfo = {
        user,
        createUser,
        signIn,
        logOut ,
        loading,
        updateUserData,
        googleLogin,
        
        
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;