import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDoLFkkPRe3RXleOB9Qm39W6WDuiddK2_4",
    authDomain: "pbfjs11.firebaseapp.com",
    projectId: "pbfjs11",
    storageBucket: "pbfjs11.appspot.com",
    messagingSenderId: "783869840328",
    appId: "1:783869840328:web:4a5a1714242c09fa598efd",
    measurementId: "G-H96KXPH0SR"
};

export const myFirebase = firebase.initializeApp(firebaseConfig);
const baseDb = myFirebase.firestore();
export const db = baseDb;