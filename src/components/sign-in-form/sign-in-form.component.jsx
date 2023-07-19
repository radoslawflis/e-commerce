import { useState } from 'react';
import { useDispatch } from 'react-redux';

import FormInput from '../form-input/form-input.component';
import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';

import { SignUpContainer, ButtonsContainer } from './sign-in-form.styles';
import {
	googleSignInStart,
	emailSignInStart,
} from '../../store/user/user.action';

const defaultFormFields = {
	email: '',
	password: '',
};

function SignInForm() {
	const dispatch = useDispatch();
	const [formFields, setFormFields] = useState(defaultFormFields);
	const { email, password } = formFields;

	function resetFormFields() {
		setFormFields(defaultFormFields);
	}

	async function signInWithGoogle() {
		dispatch(googleSignInStart());
	}

	async function handleSubmit(event) {
		event.preventDefault();

		try {
			dispatch(emailSignInStart());

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
		<SignUpContainer>
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
				<ButtonsContainer>
					<Button type='submit'>Sign In</Button>
					<Button
						type='button'
						buttonType={BUTTON_TYPE_CLASSES.google}
						onClick={signInWithGoogle}
					>
						Google sign in
					</Button>
				</ButtonsContainer>
			</form>
		</SignUpContainer>
	);
}

export default SignInForm;
