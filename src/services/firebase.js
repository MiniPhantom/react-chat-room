import firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage"

// Firebase Configs
const firebaseConfig = {
  apiKey: "AIzaSyBH61sLZOeC7xjibPDP2rkj3S7fe-a0ubw",
  authDomain: "facetime.jtlr.tech",
  projectId: "ccbycc-j",
  storageBucket: "ccbycc-j.appspot.com",
  messagingSenderId: "273858952854",
  appId: "1:273858952854:web:9f9562d858014d73cb0cb7",
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
