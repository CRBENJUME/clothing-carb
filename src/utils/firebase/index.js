// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';
import { 
  getFirestore, 
  doc, 
  getDoc,
  getDocs,
  setDoc,
  collection,
  writeBatch,
  query
} from 'firebase/firestore';
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
// eslint-disable-next-line
const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
export const signInWithGoRedirect = () => signInWithRedirect(auth, googleProvider);

//Create a Doc of users in Firebase
export const db = getFirestore();

//Add the producto to Firebase's database
export const addCollectionAndDocuments = async (collectionKey, objToAdd) => {
  //We create a collection of database and the key
  const collectionRef = collection(db, collectionKey)
  const batch = writeBatch(db)

  //For each element we put the producto into the collection
  objToAdd.forEach(element => {
    const docRef = doc(collectionRef, element.title.toLowerCase())
    batch.set(docRef, element)
  });

  await batch.commit()
  console.log('It is done')
}
//returns a map of category names to lists of documents.
export const getCategoriesAndDocuments = async () => {
  const collectionRef = collection(db, 'categories')
  const q = query(collectionRef)

  const querySnapshot = await getDocs(q)
  const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot) =>  {
    const { title, items } = docSnapshot.data()
    acc[title.toLowerCase()] = items
    return acc
  }, {})
  return categoryMap
}

export const createUserDocument = async (userAuth, additionalInfo = {}) => {
  if(!userAuth) return

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
        ...additionalInfo
      })
    } catch (error) {
      console.log('error creating the user', error.message);
    }
  }

  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
}

export const signInAuthWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
}

export const signOutUser = async () => await signOut(auth)

export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth, callback)