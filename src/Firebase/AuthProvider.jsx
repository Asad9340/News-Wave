import { createContext, useState } from 'react';
import { auth } from './firebase.config';
import { GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';

const provider = new GoogleAuthProvider();
export const AuthContext = createContext(null);
function AuthProvider({ children }) {
  const [user,setUser]=useState(null)
  const googleSignIn = () => {
    return signInWithPopup(auth, provider);
  };
  const logOut = () => {
   return signOut(auth)
  }

  const logInUser = (email,password) => {
    return signInWithEmailAndPassword(auth, email, password);
}

  const authInfo = { googleSignIn, user, setUser, logOut, logInUser };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
}

export default AuthProvider;
