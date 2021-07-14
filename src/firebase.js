import firebase from "firebase";
require("firebase/auth");
require("firebase/firestore");

// INITIALIZE FIREBASE

const firebaseConfig = {
  apiKey: "AIzaSyA4YHApJExe9AiWLCrtJ1e56zuKxtmnZgY",
  authDomain: "edtech-faf14.firebaseapp.com",
  projectId: "edtech-faf14",
  storageBucket: "edtech-faf14.appspot.com",
  messagingSenderId: "263778515423",
  appId: "1:263778515423:web:abf4f634bd711b457f6c6a",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL);

// MAKE AUTH AND FIRESTORE REFERENCES

const auth = firebase.auth();
const db = firebase.firestore();

// UPDATE FIRESTORE SETTING
db.settings({ timestampsInSnapshots: true });

const googleProvider = new firebase.auth.GoogleAuthProvider();
const facebookProvider = new firebase.auth.FacebookAuthProvider();
const githubProvider = new firebase.auth.GithubAuthProvider();
const twitterProvider = new firebase.auth.TwitterAuthProvider();

export {
  auth,
  googleProvider,
  facebookProvider,
  githubProvider,
  twitterProvider,
  firebaseApp,
  db,
};
