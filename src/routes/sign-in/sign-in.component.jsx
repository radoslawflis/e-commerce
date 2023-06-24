import { signInWithGooglePopup } from '../../utils/firebase/firebase.utils';

function SignIn() {
	const logGoogleUser = async () => {
		const response = await signInWithGooglePopup();
		console.log(response);
	};

	return (
		<div>
			<h1>Sign In Page</h1>
			<button onClick={logGoogleUser}>Sign In with Google Pop up</button>
		</div>
	);
}

export default SignIn;