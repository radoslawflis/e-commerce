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
	apiKey: 'AIzaSyDGbfzoqq2uK6i9rKE9pY2cjHGAE8aB9dY',
	authDomain: 'clothing-db-5e789.firebaseapp.com',
	projectId: 'clothing-db-5e789',
	storageBucket: 'clothing-db-5e789.appspot.com',
	messagingSenderId: '67451250218',
	appId: '1:67451250218:web:4e7e52f1ff044c4e638553',
};

// Initialize Firebase
const firebaseaApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
	prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () =>
	signInWithPopup(auth, googleProvider);
// export const signInWithGoogleRedirect = () =>
// 	signInWithRedirect(auth, googleProvider);

export const db = getFirestore(); //creating database

//storing inside database
export const createUserDocumentFromAuth = async (userAuth) => {
	const userDocRef = doc(db, 'users', userAuth.uid); //see if thre is existing document reference
	console.log(userDocRef);

	const userSnapshot = await getDoc(userDocRef);
	console.log(userSnapshot);
	console.log(userSnapshot.exists());

	if (!userSnapshot.exists()) {
		const { displayName, email } = userAuth; //destructuring this obj to use it in database
		const createAt = new Date();
		try {
			await setDoc(userDocRef, { displayName, email, createAt }); //create new document in the colection, data we wanna set it with
		} catch (error) {
			console.log('error creating the user', error.message);
		}
	}

	return userDocRef;
};
//if user data does not exist
// create/setDocument with data from userAuth in my collection (set it using userSnapshot)

//if user data exists
//return userDocRef
