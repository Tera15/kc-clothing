import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAOq8mgZWz0yyRvYIZHDfGOSsa5mhMoDbA",
    authDomain: "kc-clothing-6b829.firebaseapp.com",
    databaseURL: "https://kc-clothing-6b829.firebaseio.com",
    projectId: "kc-clothing-6b829",
    storageBucket: "kc-clothing-6b829.appspot.com",
    messagingSenderId: "449503952466",
    appId: "1:449503952466:web:f671e5e53e108a8aa4a98b",
    measurementId: "G-YRSBLDC7R2"
  }

  firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
 