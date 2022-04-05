// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCOmDEURWprkAspTiF6mvKvJpnCOpGD8D8",
  authDomain: "hello-world-d7b3d.firebaseapp.com",
  projectId: "hello-world-d7b3d",
  storageBucket: "hello-world-d7b3d.appspot.com",
  messagingSenderId: "307513978409",
  appId: "1:307513978409:web:4056dce5cf5d4173cb3638",
  measurementId: "G-FMWV7DRP5Y",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
