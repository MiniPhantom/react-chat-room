import firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage"

// Firebase Configs
const firebaseConfig = {
  apiKey: "AIzaSyCuVqKpS1piBst2KR_jT-j5R5vjHJc2Lds",
  authDomain: "chatroom-api-key-test-1.firebaseapp.com",
  projectId: "chatroom-api-key-test-1",
  storageBucket: "chatroom-api-key-test-1.appspot.com",
  messagingSenderId: "1076786971919",
  appId: "1:1076786971919:web:4da1be4a056a9d9a366a7a"
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
