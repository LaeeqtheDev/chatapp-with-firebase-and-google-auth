// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";


import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCV1L_A7O8NseY70-9NeExJxaUo8MVh0qI",
  authDomain: "chatapp-a1ccb.firebaseapp.com",
  projectId: "chatapp-a1ccb",
  storageBucket: "chatapp-a1ccb.appspot.com",
  messagingSenderId: "350103824848",
  appId: "1:350103824848:web:59d601ce615f798ae531d5",
  measurementId: "G-W3VCQNKNJ3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth =getAuth(app)
export const db = getFirestore(app)