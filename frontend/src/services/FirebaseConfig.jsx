// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC010WaEp175fVO1f8G89I1Q-e6W71LeXE",
  authDomain: "ai-tour-travel.firebaseapp.com",
  projectId: "ai-tour-travel",
  storageBucket: "ai-tour-travel.firebasestorage.app",
  messagingSenderId: "1096403540945",
  appId: "1:1096403540945:web:53b9f30d54a417e2385ef0",
  measurementId: "G-RNY8BW6X3P"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db=getFirestore(app)
// const analytics = getAnalytics(app);