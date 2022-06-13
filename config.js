import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyBQGdKyxS2o6BXWLb-iqLs9CqYpMMtnWiQ",
  authDomain: "todos-ba491.firebaseapp.com",
  projectId: "todos-ba491",
  storageBucket: "todos-ba491.appspot.com",
  messagingSenderId: "756609249360",
  appId: "1:756609249360:web:9e07eff8bd7c334ea4e155",
  measurementId: "G-RLVGYSG2MP"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export { firebase };
