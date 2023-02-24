// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAmWQID1iiW7P50pmO29XXNj9rj3dk7-0E",
  authDomain: "crwn-clothing-6a2d2.firebaseapp.com",
  projectId: "crwn-clothing-6a2d2",
  storageBucket: "crwn-clothing-6a2d2.appspot.com",
  messagingSenderId: "201637226622",
  appId: "1:201637226622:web:cb507ca8d4a775f4ff102f",
  measurementId: "G-RTMHY5BL66"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
//Create a Doc of users in Firebase
export const db = getFirestore();

export const createUserDocument = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log('error creating the user', error.message);
    }
  }

  return userDocRef;
};