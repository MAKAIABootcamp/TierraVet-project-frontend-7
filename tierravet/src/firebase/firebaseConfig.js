// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDNn2tGgucaA-Tg_y8_hPZVWa4TSOOnhy4",
  authDomain: "tierravet-3bff5.firebaseapp.com",
  projectId: "tierravet-3bff5",
  storageBucket: "tierravet-3bff5.appspot.com",
  messagingSenderId: "141763438950",
  appId: "1:141763438950:web:46cb391212a21cb00e00a7",
  measurementId: "G-BGGY8R1B0M"
};

// Initialize Firebase
// eslint-disable-next-line no-unused-vars
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
