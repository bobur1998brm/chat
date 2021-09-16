
import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';
  
firebase.initializeApp({
    apiKey: "AIzaSyB4Ig4RB-exZYjjbwyWu9k1SfHutouTNVg",
    authDomain: "brm-chat.firebaseapp.com",
    projectId: "brm-chat",
    storageBucket: "brm-chat.appspot.com",
    messagingSenderId: "320192350717",
    appId: "1:320192350717:web:b87efb3aa67ab083c2f194",
    measurementId: "G-L5TCRS6LSV"
  });

  const auth = firebase.auth();
  const firestore = firebase.firestore();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth, firestore, provider}




  // uid: user.uid,
  // displayName: user.displayName,
  // photoURL: user.photoURL,
  // text: value,
  // createAt: firestore.firestore.FieldValue.serverTimestamp()