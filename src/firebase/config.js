// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBoQnTNstVO042b3CAwQJXkhEhUR9HHS4w",
  authDomain: "pf-react-ecommercemanga.firebaseapp.com",
  projectId: "pf-react-ecommercemanga",
  storageBucket: "pf-react-ecommercemanga.appspot.com",
  messagingSenderId: "742925441294",
  appId: "1:742925441294:web:aa7c805b552c9b1acd9f5f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const initFirebase = () => app