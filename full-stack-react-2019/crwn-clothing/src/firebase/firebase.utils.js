import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCHguRU6KpClIJ7rgFMgdMj8xg-ImK-6Nw",
  authDomain: "crwn-db-d1bd0.firebaseapp.com",
  databaseURL: "https://crwn-db-d1bd0.firebaseio.com",
  projectId: "crwn-db-d1bd0",
  storageBucket: "",
  messagingSenderId: "944128887110",
  appId: "1:944128887110:web:25a89af22f1607b9"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
