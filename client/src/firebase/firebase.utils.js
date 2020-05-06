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
  };

  firebase.initializeApp(config);

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`)

    const snapShot = await userRef.get()

    if(!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try{

            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })

        } catch(error) {
            console.log('error creating user', error.message);
        }
    }
    return userRef;
  }

  export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
      const collectionRef = firestore.collection(collectionKey);
      console.log(collectionRef)

      //batching all calls together into one big request
      const batch = firestore.batch();
      objectsToAdd.forEach(obj => {
          const newDocRef = collectionRef.doc(); // create new doc ref and generate a random id for each one
            batch.set(newDocRef, obj)
    });
        return await batch.commit()
  };


  //parsing collections snapshot to useable format for the front end.
 export const convertCollectionsSnapshotToMap = (collections) => {
      const transformedCollection = collections.docs.map(doc => {
          const { title, items } = doc.data();

          return {
              //encode URI encodes the returned routeName into a url readable format read more on MDN
              routeName: encodeURI(title.toLowerCase()),
              id: doc.id,
              title,
              items
          }
       });
       
        return  transformedCollection.reduce((accumulator, collection) => {
            // destructuring title out of items array returned from collections collection in firestore.
            // using reduce to return an object containing correct information pertaining to each collection Item
        accumulator[collection.title.toLowerCase()] = collection;
        return accumulator
         } ,{})
}

export const getCurrentUser =  () => {
    return new Promise((resolve, reject) => {
        const unsubscribe = auth.onAuthStateChanged(userAuth => {
            unsubscribe();
            resolve(userAuth)
        }, reject)
    })
}

  

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;
 