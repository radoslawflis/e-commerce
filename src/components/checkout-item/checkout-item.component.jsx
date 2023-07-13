import { useDispatch, useSelector } from 'react-redux';

import {
	addItemToCart,
	removeItemFromCart,
	clearItemFromCart,
} from '../../store/cart/cart.action';
import { selectCartItems } from '../../store/cart/cart.selector';

import {
	CheckoutItemContainer,
	ImageContainer,
	BaseSpan,
	Quantity,
	Arrow,
	Value,
	RemoveButton,
} from './checkout-item.styles';

function CheckoutItem({ cartItem }) {
	const { name, price, imageUrl, quantity } = cartItem;

	const dispatch = useDispatch();
	const cartItems = useSelector(selectCartItems);

	function clearItemHandler() {
		dispatch(clearItemFromCart(cartItems, cartItem));
	}
	function addItemHandler() {
		dispatch(addItemToCart(cartItems, cartItem));
	}

	function removeItemHandler() {
		dispatch(removeItemFromCart(cartItems, cartItem));
	}

	return (
		<CheckoutItemContainer>
			<ImageContainer>
				<img src={imageUrl} alt={`${name}`} />
			</ImageContainer>
			<BaseSpan>{name}</BaseSpan>
			<Quantity>
				<Arrow onClick={removeItemHandler}>&#10094;</Arrow>{' '}
				<Value>{quantity}</Value>
				<Arrow onClick={addItemHandler}>&#10095;</Arrow>
			</Quantity>
			<BaseSpan>{price * quantity}</BaseSpan>

			<RemoveButton onClick={clearItemHandler}>&#10005;</RemoveButton>
		</CheckoutItemContainer>
	);
}

export default CheckoutItem;
