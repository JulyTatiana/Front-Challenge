import { getAuth } from 'firebase/auth';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCxe0x9hDB136Nf_Wytu4rGKeyWiXaLED8",
  authDomain: "challenge-sofka--auth.firebaseapp.com",
  projectId: "challenge-sofka--auth",
  storageBucket: "challenge-sofka--auth.appspot.com",
  messagingSenderId: "160133854395",
  appId: "1:160133854395:web:8078f3f3736a6779b8659e",
  measurementId: "G-N3720KDT3D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();