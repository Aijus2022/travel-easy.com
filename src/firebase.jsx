import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDwITpGd6r2y7mkZGAUq3XT6cRRCFQzFrg",
  authDomain: "travel-easy-3fe53.firebaseapp.com",
  projectId: "travel-easy-3fe53",
  storageBucket: "travel-easy-3fe53.appspot.com",
  messagingSenderId: "49424510989",
  appId: "1:49424510989:web:abeb1911a81efcd446e544",
  measurementId: "G-THBCRFBQ84" // Optional for analytics
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
