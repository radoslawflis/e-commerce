import { initializeApp } from 'firebase/app';
import {
	getAuth,
	signInWithPopup,
	signInWithRedirect,
	GoogleAuthProvider,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signOut,
	onAuthStateChanged,
	NextOrObserver,
	User,
} from 'firebase/auth';

import {
	getFirestore,
	doc,
	getDoc,
	setDoc,
	collection,
	writeBatch,
	query,
	getDocs,
	QueryDocumentSnapshot,
} from 'firebase/firestore';

import { Category } from '../../store/categories/category.types';

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

export const db = getFirestore(); //creating database

export type ObjectToAdd = {
	title: string;
}

//creating collection
export async function addCollectionAndDocuments <T extends ObjectToAdd>(
	collectionKey: string,
	objectsToAdd: T[],
): Promise<void> {
	const collectionRef = collection(db, collectionKey); //specific collection with category
	const batch = writeBatch(db); //return a batch and pass db we wanna make on

	objectsToAdd.forEach((object) => {
		const docRef = doc(collectionRef, object.title.toLowerCase()); //collectionRef tells directly which db we use
		batch.set(docRef, object); //set location with value of object itself
	}); //create each object as a document in a collection

	await batch.commit(); //firing batch
	console.log('done');
}



export async function getCategoriesAndDocuments(): Promise<Category[]> {
	const collectionRef = collection(db, 'categories');
	const q = query(collectionRef); //generate query of collectionRef

	const querySnapshot = await getDocs(q); //data itself
	//querySnapshots.docs give access to all documents inside, snapshots are data itself
	return querySnapshot.docs.map((docSnapshot) => docSnapshot.data() as Category);
	//return categoriesArray
}

/*
{
	hats: {
		title: 'Hats',
		items: [
			{},
			{}
		]
	},
	sneakers: {
		title: 'Hats',
		items: [
			{},
			{}
		]
	},
}

*/

export type AdditionalInformation = {
	displayName?: string;
}

export type UserData = {
	createdAt: Date;
	displayName: string;
	email: string;
}

//storing inside database
export const createUserDocumentFromAuth = async (
	userAuth: User,
	additionalInformation = {} as AdditionalInformation
): Promise<void | QueryDocumentSnapshot<UserData>> => {
	if (!userAuth) return;

	const userDocRef = doc(db, 'users', userAuth.uid); //see if thre is existing document reference
	// console.log(userDocRef);

	const userSnapshot = await getDoc(userDocRef);
	// console.log(userSnapshot);
	// console.log(userSnapshot.exists());

	if (!userSnapshot.exists()) {
		const { displayName, email } = userAuth; //destructuring this obj to use it in database
		const createAt = new Date();
		try {
			await setDoc(userDocRef, {
				displayName,
				email,
				createAt,
				...additionalInformation,
			}); //create new document in the colection, data we wanna set it with
		} catch (error) {
			console.log('error creating the user', error);
		}
	}

	return userSnapshot as QueryDocumentSnapshot<UserData>;
};
//if user data does not exist
// create/setDocument with data from userAuth in my collection (set it using userSnapshot)

//if user data exists
//return userDocRef
export const creatAuthUserWithEmailandPassword = async (email: string, password: string) => {
	if (!email || !password) return;

	return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailandPassword = async (email: string, password: string) => {
	if (!email || !password) return;

	return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => signOut(auth);

export const onAuthStateChangedListener = (callback: NextOrObserver<User>) =>
	onAuthStateChanged(auth, callback);

export const getCurrentUser = (): Promise<User | null> => {
	return new Promise((resolve, reject) => {
		const unsubscribe = onAuthStateChanged(
			auth,
			(userAuth) => {
				unsubscribe();
				resolve(userAuth);
			},
			reject
		);
	});
};
