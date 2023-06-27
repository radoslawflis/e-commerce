import { useState, useContext } from 'react';

import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';

import { UserContext } from '../../contexts/user.context';

import {
	createUserDocumentFromAuth,
	signInWithGooglePopup,
	signInAuthUserWithEmailandPassword,
} from '../../utils/firebase/firebase.utils';

import './sign-in-form.styles.scss';

const defaultFormFields = {
	email: '',
	password: '',
};

function SignInForm() {
	const [formFields, setFormFields] = useState(defaultFormFields);
	const { email, password } = formFields;

	const { setCurrentUser } = useContext(UserContext);

	function resetFormFields() {
		setFormFields(defaultFormFields);
	}

	async function signInWithGoogle() {
		const { user } = await signInWithGooglePopup();
		await createUserDocumentFromAuth(user);
		console.log(user);
		setCurrentUser(user);
	}

	async function handleSubmit(event) {
		event.preventDefault();

		try {
			const { user } = await signInAuthUserWithEmailandPassword(
				email,
				password
			);
			setCurrentUser(user);

			resetFormFields();
		} catch (error) {
			switch (error.code) {
				case 'auth/wrong-password':
					alert('incorrect password for email');
					break;
				case 'auth/user-not-found':
					alert('no user associated with this email');
					break;
				default:
					console.log(error);
			}

			console.log(error);
		}
	}

	function handleChange(event) {
		const { name, value } = event.target;
		setFormFields({ ...formFields, [name]: value });
	}

	return (
		<div className='sign-up-container'>
			<h2>I already have an account</h2>
			<span>Sign in with your email and password</span>
			<form onSubmit={handleSubmit}>
				<FormInput
					label='Email'
					type='email'
					required
					onChange={handleChange}
					name='email'
					value={email}
				/>

				<FormInput
					label='Password'
					type='password'
					required
					onChange={handleChange}
					name='password'
					value={password}
				/>
				<div className='buttons-container'>
					<Button type='submit'>Sign In</Button>
					<Button
						type='button'
						buttonType='google'
						onClick={signInWithGoogle}
					>
						Google sign in
					</Button>
				</div>
			</form>
		</div>
	);
}

export default SignInForm;
