// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDAsis-Yq6J0VC5AS5GuprMcw-M3xlxbgM',
  authDomain: 'news-wave-3194a.firebaseapp.com',
  projectId: 'news-wave-3194a',
  storageBucket: 'news-wave-3194a.appspot.com',
  messagingSenderId: '7361676885',
  appId: '1:7361676885:web:492420c1653bfdace636dc',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
