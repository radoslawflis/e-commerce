import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';

import { ShoppingIcon, ItemCount, CartIconContainer } from './cart-icon.styles';

function CartIcon() {
	const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);

	function toggleisCartOpen() {
		setIsCartOpen(!isCartOpen);
	}

	return (
		<CartIconContainer onClick={toggleisCartOpen}>
			<ShoppingIcon className='shopping-icon' />
			<ItemCount>{cartCount}</ItemCount>
		</CartIconContainer>
	);
}

export default CartIcon;
