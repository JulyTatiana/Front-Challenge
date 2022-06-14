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



// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyCRR-69yIR8GSAGcMVvAJRtQL2zyx3-zLw",
//   authDomain: "sofkafirebaseraul.firebaseapp.com",
//   projectId: "sofkafirebaseraul",
//   storageBucket: "sofkafirebaseraul.appspot.com",
//   messagingSenderId: "711332887401",
//   appId: "1:711332887401:web:74ae75ddfd308c6877dbf8",
//   measurementId: "G-3W7VQRYXSJ"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);




// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyCRR-69yIR8GSAGcMVvAJRtQL2zyx3-zLw",
//   authDomain: "sofkafirebaseraul.firebaseapp.com",
//   projectId: "sofkafirebaseraul",
//   storageBucket: "sofkafirebaseraul.appspot.com",
//   messagingSenderId: "711332887401",
//   appId: "1:711332887401:web:3c767963cdfc32f777dbf8",
//   measurementId: "G-FZ0EBLH46S"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);