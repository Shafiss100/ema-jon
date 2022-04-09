// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDA5pk7_jRqnjAUtigYBfl8NVvinVFqJeg",
  authDomain: "ema-jon-678cc.firebaseapp.com",
  projectId: "ema-jon-678cc",
  storageBucket: "ema-jon-678cc.appspot.com",
  messagingSenderId: "295069996576",
  appId: "1:295069996576:web:188404a7bcef4923f6ce45",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;