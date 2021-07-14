import firebase from "firebase";
require("firebase/auth");
require("firebase/firestore");

// INITIALIZE FIREBASE

const firebaseConfig = {
  apiKey: `${process.env.REACT_APP_FIREBASE_API_KEY}`,
  authDomain: `${process.env.REACT_APP_FIREBASE_AUTH_DOMAIN}`,
  projectId: `${process.env.REACT_APP_PROJECT_ID}`,
  storageBucket: `${process.env.REACT_APP_STORAGE_BUCKET}`,
  messagingSenderId: `${process.env.REACT_APP_MESSAGING_SENDER_ID}`,
  appId: `${process.env.REACT_APP_FIREBASE_APP_ID}`,
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
