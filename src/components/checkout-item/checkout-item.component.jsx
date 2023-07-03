import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';

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

	const { addItemToCart, removeItemFromCart, clearItemFromCart } =
		useContext(CartContext);

	function clearItemHandler() {
		clearItemFromCart(cartItem);
	}
	function addItemHandler() {
		addItemToCart(cartItem);
	}

	function removeItemHandler() {
		removeItemFromCart(cartItem);
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
