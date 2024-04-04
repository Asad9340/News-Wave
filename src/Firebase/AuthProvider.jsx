import { createContext, useState } from 'react';
import { auth } from './firebase.config';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

const provider = new GoogleAuthProvider();
export const AuthContext = createContext(null);
function AuthProvider({ children }) {
  const [user,setUser]=useState([])
  const googleSignIn = () => {
    return signInWithPopup(auth, provider);
  };

  const authInfo = { googleSignIn ,user,setUser};
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
}

export default AuthProvider;
