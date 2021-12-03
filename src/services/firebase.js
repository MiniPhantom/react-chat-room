import firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage"

// Firebase Configs
const firebaseConfig = {
  apiKey: "AIzaSyCN1xSBYT3LZouU6_kXgZgVk2OG9Pd5T7E",
  authDomain: "unprivate-c.firebaseapp.com",
  projectId: "unprivate-c",
  storageBucket: "unprivate-c.appspot.com",
  messagingSenderId: "37666053133",
  appId: "1:37666053133:web:2b105143e52e24314b8944"
  measurementId: "G-KEMR0GGXKM"
};

// Checking if app already initialize then don't initialize again
const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const auth = firebase.auth();
const googleProvider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();
export { db, auth, googleProvider, storage };
