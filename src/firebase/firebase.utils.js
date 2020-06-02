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
        } catch (err) {
            console.log("ERROR CREATING USER", err.message);
        }
    }

    return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
