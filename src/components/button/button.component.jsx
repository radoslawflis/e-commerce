import {
	BaseButton,
	GoogleSignInButton,
	InvertedButton,
} from './button.styles.jsx';

//default
// inverted
// google sign in

export const BUTTON_TYPE_CLASSES = {
	base: 'base',
	google: 'google-sign-in',
	inverted: 'inverted',
};

function getButton(buttonType = BUTTON_TYPE_CLASSES.base) {
	return {
		[BUTTON_TYPE_CLASSES.base]: BaseButton,
		[BUTTON_TYPE_CLASSES.google]: GoogleSignInButton,
		[BUTTON_TYPE_CLASSES.inverted]: InvertedButton,
	}[buttonType];
}

function Button({ children, buttonType, ...otherProps }) {
	const CustomButton = getButton(buttonType);
	return <CustomButton {...otherProps}>{children}</CustomButton>;
}

export default Button;
