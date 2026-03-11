// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDn0SYg3M8kAbU_UOjR6IIsHM7rbVGVIqA",
  authDomain: "login-firebase-react-d2da1.firebaseapp.com",
  projectId: "login-firebase-react-d2da1",
  storageBucket: "login-firebase-react-d2da1.firebasestorage.app",
  messagingSenderId: "446487512815",
  appId: "1:446487512815:web:0fadd3fbbe438e7f803d1a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };

