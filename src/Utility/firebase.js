


// Import the functions you need from the SDKs you need

import firebase from "firebase/compat/app"
import {getAuth } from "firebase/auth"
import "firebase/compat/firestore"
import "firebase/compat/auth"


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB_o4dP0stNOTX3zRyJLJ3LAPVg7UymrZM",
  authDomain: "clone-c3fe6.firebaseapp.com",
  projectId: "clone-c3fe6",
  storageBucket: "clone-c3fe6.appspot.com",
  messagingSenderId: "699700947493",
  appId: "1:699700947493:web:76b78de4ae5f1336f0edcc"
};

// Initialize Firebase
const app =  firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = app.firestore()