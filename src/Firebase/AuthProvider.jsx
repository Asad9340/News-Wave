import { createContext, useEffect, useState } from 'react';
import { auth } from './firebase.config';
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from 'firebase/auth';

const GoogleProvider = new GoogleAuthProvider();
const GitHubProvider = new GithubAuthProvider();
export const AuthContext = createContext(null);
function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const googleSignIn = () => {
    return signInWithPopup(auth, GoogleProvider);
  };

  const gitHubLogIn = () => {
    return signInWithPopup(auth, GitHubProvider);
  }

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  const logInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, currentUser => {
      if (currentUser) {
        setUser(currentUser);
      }
      setLoading(false);
      return () => {
        unSubscribe();
      };
    });
  }, []);

  const authInfo = {
    googleSignIn,
    gitHubLogIn,
    user,
    loading,
    setLoading,
    setUser,
    logOut,
    logInUser,
    createUser,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
}

export default AuthProvider;
