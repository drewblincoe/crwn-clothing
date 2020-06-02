import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
    apiKey: "AIzaSyDy6HwSJHECDP9eFqPkwPPo9bWJ7skaD1Y",
    authDomain: "crwn-clothing-db-83068.firebaseapp.com",
    databaseURL: "https://crwn-clothing-db-83068.firebaseio.com",
    projectId: "crwn-clothing-db-83068",
    storageBucket: "crwn-clothing-db-83068.appspot.com",
    messagingSenderId: "95255011408",
    appId: "1:95255011408:web:dc504e00314f6d6f46f155",
    measurementId: "G-Y8HD080PCV"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
