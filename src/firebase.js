import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBAkT8-6H8_VwcUBlq5jdhLU5onscipkpo",
  authDomain: "react-firebase-2edc0.firebaseapp.com",
  databaseURL: "https://react-firebase-2edc0.firebaseio.com",
  projectId: "react-firebase-2edc0",
  storageBucket: "react-firebase-2edc0.appspot.com",
  messagingSenderId: "667760633170",
  appId: "1:667760633170:web:f9c94e7310eb251c9b468b",
  measurementId: "G-NHSEKY4F46"
};
// Initialize Firebase
firebase.initializeApp(config);

export const firestore = firebase.firestore();
export const auth = firebase.auth();

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;

    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,

        email,

        createdAt,

        ...additionalData
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

export const provider = new firebase.auth.GoogleAuthProvider();
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export const signOut = () => auth.signOut();

window.firebase = firebase;

export default firebase;
