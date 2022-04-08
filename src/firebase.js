import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBJUrx1Dc1zIcupZMg_E-gr3uZrZuBW4rE",
    authDomain: "ma-connect-9d32d.firebaseapp.com",
    projectId: "ma-connect-9d32d",
    storageBucket: "ma-connect-9d32d.appspot.com",
    messagingSenderId: "103559552326",
    appId: "1:103559552326:web:9d7370baf5d6ff7028d947",
    measurementId: "G-SNEQVTX9FM"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth};