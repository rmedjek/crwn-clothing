import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyDgtq08qdirUG9buet7xnku88FexgeQdgw",
    authDomain: "crwn-db-aae0c.firebaseapp.com",
    databaseURL: "https://crwn-db-aae0c.firebaseio.com",
    projectId: "crwn-db-aae0c",
    storageBucket: "crwn-db-aae0c.appspot.com",
    messagingSenderId: "1063971588269",
    appId: "1:1063971588269:web:2ac3b8ce18ab3e1a7b1e24"
  };
  
  export const createUserProfileDocument = async (userAuth, additionalData) => {
      if (!userAuth) return;

      const userRef = firestore.doc(`users/${userAuth.uid}`);

      const snapshot = await userRef.get();

      if (!snapshot.exists) {
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
              console.log('error creating user', error.message);
          }
      }
      
      return userRef;
  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;