// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD7N0qwUQZBVKU9SZXkaxDcAZGFoOL3mII",
  authDomain: "metroapp-75583.firebaseapp.com",
  projectId: "metroapp-75583",
  storageBucket: "metroapp-75583.appspot.com",
  messagingSenderId: "127138780040",
  appId: "1:127138780040:web:b13d59b713fa6b6a2c603d",
  measurementId: "G-Z4WEEET0S4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
const analytics = getAnalytics(app);
//const analytics = getAnalytics(app);