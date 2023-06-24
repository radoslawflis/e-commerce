import { initializeApp } from 'firebase/app';
import {
	getAuth,
	signInWithRedirect,
	signInWithPopup,
	GoogleAuthProvider,
} from 'firebase/auth';

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

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
	prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
