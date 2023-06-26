// import { useEffect } from 'react';
// import { getRedirectResult } from 'firebase/auth';

import {
	auth,
	signInWithGooglePopup,
	// signInWithGoogleRedirect,
	createUserDocumentFromAuth,
} from '../../utils/firebase/firebase.utils';

function SignIn() {
	// useEffect(() => {
	// 	async function fetchAuth() {
	// 		const response = await getRedirectResult(auth);

	// 		if (response) {
	// 			await createUserDocumentFromAuth(response.user);
	// 		}
	// 	}
	// 	fetchAuth();
	// }, []);

	const logGoogleUser = async () => {
		const { user } = await signInWithGooglePopup();
		const userDocRef = await createUserDocumentFromAuth(user);
	};

	return (
		<div>
			<h1>Sign In Page</h1>
			<button onClick={logGoogleUser}>Sign In with Google Pop up</button>
			{/* <button onClick={signInWithGoogleRedirect}>
				Sign In with Google signInWithRedirect
			</button> */}
		</div>
	);
}

export default SignIn;
