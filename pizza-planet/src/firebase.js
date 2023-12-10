// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { collection, getFirestore } from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC2EU4tAXorQKPLgS12WSGg0KfPNDn86IQ",
    authDomain: "pizza-planet-vuejs-f853a.firebaseapp.com",
    projectId: "pizza-planet-vuejs-f853a",
    storageBucket: "pizza-planet-vuejs-f853a.appspot.com",
    messagingSenderId: "256790170026",
    appId: "1:256790170026:web:43656bef22f562767b43d3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export const dbPizzasRef = collection(db, "pizzas");
export const dbOrdersRef = collection(db, "orders");

