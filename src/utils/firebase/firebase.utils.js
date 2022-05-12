
import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider
} from 'firebase/auth';
import {
  getFirestore,
  doc,
  getDoc,
  setDoc
} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAacMtMvF3iUX2SyclRpDWRVgMUU9_r9N0",
  authDomain: "royal-db-d0279.firebaseapp.com",
  projectId: "royal-db-d0279",
  storageBucket: "royal-db-d0279.appspot.com",
  messagingSenderId: "283550416346",
  appId: "1:283550416346:web:93ca16f70b588ecaf854e3"
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  // if user data does not exist
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt
      })
    }
    catch (err) {
      console.log('error creating user: ', err.message);
    }

    // if user data does exists
    return userDocRef;
  }
}