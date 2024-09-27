// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDwITpGd6r2y7mkZGAUq3XT6cRRCFQzFrg",
  authDomain: "travel-easy-3fe53.firebaseapp.com",
  projectId: "travel-easy-3fe53",
  storageBucket: "travel-easy-3fe53.appspot.com",
  messagingSenderId: "49424510989",
  appId: "1:49424510989:web:abeb1911a81efcd446e544",
  measurementId: "G-THBCRFBQ84"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
