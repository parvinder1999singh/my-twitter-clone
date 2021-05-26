import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyDzWX1f25s9BZpJGoMkCAsPTynunAcx_Ig",
    authDomain: "twitter-clone-42041.firebaseapp.com",
    projectId: "twitter-clone-42041",
    storageBucket: "twitter-clone-42041.appspot.com",
    messagingSenderId: "182663065521",
    appId: "1:182663065521:web:f71a7c6a9d0d2e602bd790",
    measurementId: "G-2V60ZYPZFP"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  export default db;